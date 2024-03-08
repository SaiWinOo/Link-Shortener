'use client';

import React, {useState} from 'react';
import Button from "@/components/Button";
import WorkingSvg from '../images/illustration-working.svg';
import Image from "next/image";
import Recognition from '../images/icon-brand-recognition.svg';
import DetailedRecords from '../images/icon-detailed-records.svg'
import FullyCustomizable from '../images/icon-fully-customizable.svg';


import {FaFacebookSquare, FaTwitterSquare, FaInstagram} from "react-icons/fa";
import CopyButton from "@/components/CopyButton";
import axios from "axios";

// e8a44aacbba4456db6b4d0329fc9dfb3


const Page = () => {


    const [longLink,setLongLink] = useState('');
    const [error,setError] = useState('');
    const [links,setLinks]     = useState(JSON.parse(localStorage.getItem('_links')));


    const shortenLink =  async () => {
        if(!longLink){
            setError('Please provide the valid url');
            return;
        }

        // try {
        //     let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        //     console.log(res);
        // }catch (e){
        //     console.log(e);
        // }
        let links = [
            {long : 'https://www.google.com/search?q=sea',short : 'https://rebrandly.com/fas'},
            {long : 'https://www.google.com/search?q=sea',short : 'https://rebrandly.com/fas'},
        ];

        localStorage.setItem('_links',JSON.stringify(links));

        try{
            let res = await axios.post('https://api.rebrandly.com/v1/links',
                {
                    destination: longLink,
                },{
                    headers : {
                        "Content-Type": "application/json",
                        "apikey": "e8a44aacbba4456db6b4d0329fc9dfb3",
                        "workspace": "21f4332c5b6943ed950cc790f69e1fa5"
                    }
                });

            let result = {long : longLink, short : res.data.shortUrl};

            let temps = [result, ...links];
            setLinks(temps);
            localStorage.setItem('_links', JSON.stringify(temps));
        }catch (e)  {
            console.log(e);
        }

    }

    return (
        <div>
            <nav className={'flex items-center justify-between max-w-[1200px] mx-auto p-5'}>
                <div className={'flex items-center gap-10'}>
                    <div>
                        <h2 className={'text-2xl font-semibold'}>Shortly</h2>
                    </div>
                    <ul className={'flex gap-4'}>
                        <li className={'font-semibold text-gray-500'}>Features</li>
                        <li className={'font-semibold text-gray-500'}>Pricing</li>
                        <li className={'font-semibold text-gray-500'}>Resources</li>
                    </ul>
                </div>
                <div className={'flex gap-5'}>
                    <button className={'font-semibold text-gray-500'}>Login</button>
                    <Button>Sign up</Button>
                </div>
            </nav>


            <div className={'max-w-[1200px] p-5 mx-auto flex flex-col lg:flex-row items-center gap-10 pt-20'}>
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
                <div className={'w-full absolute top-[-11%]'}>
                    <div
                        className={'bg-purple-700 max-w-[1200px] mx-auto  w-full  flex items-center justify-between rounded-lg gap-5 px-7 py-14'}>
                        <div className={'w-[75%] relative'}>
                            <input onChange={(e)=> {
                                setError('');
                                setLongLink(e.target.value);
                            }} type="text" className={'p-3 w-[100%] rounded-md focus:ring-2 focus:ring-primary'}
                                   placeholder={'Shorten a link here'}/>
                            {
                                error &&
                                <p className={'text-sm text-red-500 absolute mt-1'}>{error}</p>
                            }
                        </div>

                        <Button onClick={shortenLink} className={'rounded-md p-3 w-[25%]'}>Shorten It!</Button>
                    </div>
                </div>
                <div className={'pt-[10%]'}></div>
                <div className={'my-5 max-w-[1200px] mx-auto'}>

                    {
                        links?.map((l,index) => (
                            <div key={index.toString()} className={'flex justify-between mb-3 items-center bg-white p-3 shadow'}>
                                <p>{l.long}</p>
                                <p>{l.short}</p>
                                <CopyButton text={l.short}/>
                            </div>
                        ))
                    }

                </div>
                <div>
                    <h1 className={'text-4xl font-semibold text-center my-2'}>Advanced Statistics</h1>
                    <p className={'text-center text-gray-500'}>Track how your links are performing across the web with
                        our advanced statistics dashboard.</p>
                </div>

                <div className={'pb-32 mx-auto max-w-[1200px]'}>
                    <div className={' gap-5 mt-24 grid grid-cols-3 items-start relative '}>
                        <div className="bg-primary p-1.5 w-full top-[45%] absolute"></div>
                        <div className={'bg-white p-5 shadow rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={Recognition}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Brand Recognition</h3>
                            <p className={'text-gray-500'}>Boost your brand recognition with each link. Generic links
                                don{"'"}t
                                mean a thing. Branded links help instil confidence in your content.</p>
                        </div>

                        <div className={'bg-white p-5 shadow mt-10 rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={DetailedRecords}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Detailed Records</h3>
                            <p className={'text-gray-500'}>Gain insights into who is clicking your links. Knowing when
                                and where people engage with your content helps inform better decisions.</p>
                        </div>

                        <div className={'bg-white p-5 shadow mt-20 rounded-lg relative'}>
                            <div
                                className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                                <Image src={FullyCustomizable}></Image>
                            </div>
                            <h3 className={'text-xl font-semibold mt-5 mb-2'}>Fully Customizable</h3>
                            <p className={'text-gray-500'}>Improve brand awareness and content discoverability through
                                customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'bg-purple-700  text-white flex flex-col justify-center items-center py-10'}>
                <h2 className={'font-semibold text-2xl mb-5'}>Boost your links today</h2>
                <Button>Get Started</Button>
            </div>

            <footer className={'bg-black text-white pt-10 pb-20'}>
                <div className={'max-w-[1200px] mx-auto  flex justify-between'}>
                    <div>
                        <h2 className={'text-2xl font-semibold'}>Shortly</h2>
                    </div>
                    <div className={'flex gap-10'}>
                        <div>
                            <h4 className={'font-semibold text-lg'}>Features</h4>
                            <ul className={'text-gray-300'}>
                                <li><a href="/"> Link Shortening </a></li>
                                <li><a href="/"> Branded Links </a></li>
                                <li><a href="/"> Analytics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={'font-semibold text-lg'}>Resources</h4>
                            <ul className={'text-gray-300'}>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Developers</a></li>
                                <li><a href="/">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={'font-semibold text-lg'}>Company</h4>
                            <ul className={'text-gray-300'}>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Out team</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={'flex text-3xl gap-5 justify-between items-start'}>
                        <a className={'hover:text-primary duration-300 transition-all'}
                           href="https://www.facebook.com/saiwinoo13/">
                            <FaFacebookSquare/>
                        </a>
                        <a className={'hover:text-primary duration-300 transition-all'}
                           href="https://twitter.com/Saiwinoo">
                            <FaTwitterSquare/>
                        </a>
                        <a className={'hover:text-primary duration-300 transition-all'}
                           href="https://www.instagram.com/saiwinoo13/">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>

            </footer>
        </div>


    );
};

export default Page;
