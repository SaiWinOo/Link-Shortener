'use client';

import React, {useEffect, useState} from 'react';
import Button from "@/components/Button";
import WorkingSvg from '../images/illustration-working.svg';
import Image from "next/image";
import Recognition from '../images/icon-brand-recognition.svg';
import DetailedRecords from '../images/icon-detailed-records.svg'
import FullyCustomizable from '../images/icon-fully-customizable.svg';

import CopyButton from "@/components/CopyButton";
import axios from "axios";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



const Page = () => {


    const [longLink,setLongLink] = useState('');
    const [error,setError] = useState('');
    const [links,setLinks]     = useState([]);
    const [loading,setLoading] = useState(false);

    const shortenLink =  async () => {
        if(!longLink){
            setError('Please provide the valid url');
            return;
        }

        try{
            setLoading(true);
            let res = await axios.post('https://beshort1.vercel.app/links',
                {
                    url: longLink,
                });

            let result = {long : longLink, short : res.data.link};

            let temps = [result, ...links];
            setLinks(temps);
            localStorage.setItem('_links', JSON.stringify(temps));
            setLongLink('');
        }catch (e)  {
            console.log(e);
        }finally {
            setLoading(false);
        }

    }

    const clearAll = () => {
        localStorage.setItem('_links', JSON.stringify([]));
        setLinks([]);
    }

    useEffect(() => {
        let links = JSON.parse(localStorage.getItem('_links')) ?? []
        setLinks(links);
    }, []);

    return (
        <div>
            <Navbar />


            <div className={'max-w-[1200px] p-5 mx-auto flex flex-col pb-16 lg:flex-row items-center gap-10 pt-20'}>
                <div>
                    <h1 className={'text-5xl font-semibold mb-2'}>More than just shorter links</h1>
                    <p className={'mb-8 text-gray-500'}>Build your brand{"'"}s recognition and get detailed insights on how
                        your links are performing</p>
                    <Button>Get Started</Button>
                </div>
                <div>
                    <Image  src={WorkingSvg} className={''} alt=""/>
                </div>
            </div>

            <div className={'bg-gray-100 min-h-[70vh] mt-32 relative'}>
                <div className={'w-full absolute top-[-8%] px-5'}>
                    <div
                        style={{
                            backgroundImage: "url(/bg-shorten-desktop.svg)",
                        }}
                        className={`bg-secondary bg-no-repeat bg-cover  max-w-[1200px] mx-auto  w-full  flex flex-col lg:flex-row items-center justify-between rounded-lg gap-5 px-7 py-14`}>
                        <div className={'w-full lg:w-[75%] relative mb-3 lg:mb-0'}>
                            <input value={longLink} onChange={(e)=> {
                                setError('');
                                setLongLink(e.target.value);
                            }} type="text" className={'p-3 w-[100%]  rounded-md focus:ring-2 focus:ring-primary'}
                                   placeholder={'Shorten a link here'}/>
                            {
                                error &&
                                <p className={'text-sm text-red-500  absolute mt-1'}>{error}</p>
                            }
                        </div>

                        <Button loading={loading} onClick={shortenLink} className={'rounded-md p-3 w-full  lg:w-[25%]'}>Shorten It!</Button>
                    </div>
                </div>
                <div className={'pt-[27%] lg:pt-[10%]'}></div>
                <div className={'my-5 px-5 max-w-[1200px] mb-20 lg:mx-auto'}>
                    <div className={'flex justify-end my-5'}>
                        <Button onClick={()=> clearAll()}>Clear all links</Button>
                    </div>
                    {
                        links?.map((l,index) => (
                            <div key={l.short} className={'flex flex-col lg:flex-row justify-between  lg:items-center rounded-lg mb-3 bg-white p-3 gap-3 shadow'}>
                                <p className={'text-balance'}>{l.long}</p>
                                <div className={'block lg:hidden p-[.3px] bg-gray-200'}></div>
                                <div className={'flex flex-col lg:flex-row w-full lg:w-[37%] items-start lg:items-center gap-3 justify-between'}>
                                    <a href={l.short} target={'_blank'} className={'text-primary '}>{l.short}</a>
                                    <CopyButton text={l.short}/>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className={'px-5 '}>
                    <h1 className={'text-4xl font-semibold text-center my-2'}>Advanced Statistics</h1>
                    <p className={'text-center text-gray-500'}>Track how your links are performing across the web with
                        our advanced statistics dashboard.</p>
                </div>

                <div className={'pb-32 mx-auto max-w-[1200px] p-5'}>
                    <div className={'gap-16 lg:gap-5 mt-24 grid grid-cols-1 lg:grid-cols-3 items-start relative '}>
                        <div className="bg-primary p-1.5 w-full top-[45%] hidden lg:inline-block absolute"></div>
                        <div className={'bg-white p-5 shadow hover:shadow-lg shadow-primary rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={Recognition} alt={'Recognition'}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Brand Recognition</h3>
                            <p className={'text-gray-500'}>Boost your brand recognition with each link. Generic links
                                don{"'"}t
                                mean a thing. Branded links help instil confidence in your content.</p>
                        </div>

                        <div className={'bg-white p-5 shadow hover:shadow-lg shadow-primary mt-0 lg:mt-10 rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={DetailedRecords} alt={'Detailed Records'}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Detailed Records</h3>
                            <p className={'text-gray-500'}>Gain insights into who is clicking your links. Knowing when
                                and where people engage with your content helps inform better decisions.</p>
                        </div>

                        <div className={'bg-white p-5 shadow hover:shadow-lg shadow-primary mt-0 lg:mt-20 rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={FullyCustomizable} alt={'Fully Customizable'}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Fully Customizable</h3>
                            <p className={'text-gray-500'}>Improve brand awareness and content discoverability through
                                customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundImage : "url(/bg-boost-desktop.svg)",

                }}
                className={'bg-secondary bg-no-repeat bg-cover text-white flex flex-col justify-center items-center py-10'}>
                <h2 className={'font-semibold text-2xl mb-5'}>Boost your links today</h2>
                <Button>Get Started</Button>
            </div>

           <Footer />
        </div>


    );
};

export default Page;
