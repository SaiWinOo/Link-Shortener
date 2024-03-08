import React from 'react';
import Button from "@/components/Button";
import WorkingSvg from '../images/illustration-working.svg';
import Image from "next/image";
import Recognition from '../images/icon-brand-recognition.svg';


const Page = () => {
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
                    <p className={'mb-8 text-gray-500'}>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    <Button>Get Started</Button>
                </div>
                <div>
                    <Image src={WorkingSvg} className={''} alt=""/>
                </div>
            </div>

            <div className={'bg-gray-50 min-h-[70vh] mt-32 relative'}>
                <div className={'w-full absolute top-[-16%]'}>
                    <div
                        className={'bg-purple-700 max-w-[800px] mx-auto  w-full  flex items-center justify-between rounded-lg gap-5 p-7'}>
                        <input type="text" className={'p-3 w-[75%] rounded-md '} placeholder={'Shorten a link here'}/>
                        <Button className={'rounded-md p-3 w-[25%]'}>Shorten It!</Button>
                    </div>
                </div>
                <div className={'pt-[10%]'}>
                    <h1 className={'text-4xl font-semibold text-center my-2'}>Advanced Statistics</h1>
                    <p className={'text-center text-gray-500'}>Track how your links are performing across the web with
                        our advanced statistics dashboard.</p>
                </div>

                <div className={'mx-auto max-w-[1200px] gap-5 mt-24 grid grid-cols-3'}>
                    <div className={'bg-white p-5 shadow rounded-lg '}>
                        <div
                            className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                            <Image src={Recognition}></Image>
                        </div>
                        <h3 className={'text-xl font-semibold mt-5 mb-2'}>Brand Recognition</h3>
                        <p className={'text-gray-500'}>Boost your brand recognition with each link. Generic links don't
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className={'bg-white p-5 shadow rounded-lg '}>
                        <div
                            className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                            <Image src={Recognition}></Image>
                        </div>
                        <h3 className={'text-xl font-semibold mt-5 mb-2'}>Brand Recognition</h3>
                        <p className={'text-gray-500'}>Boost your brand recognition with each link. Generic links don't
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className={'bg-white p-5 shadow rounded-lg '}>
                        <div
                            className={'bg-black rounded-full w-[70px] h-[70px] flex justify-center items-center mt-[-15%]'}>
                            <Image src={Recognition}></Image>
                        </div>
                        <h3 className={'text-xl font-semibold mt-5 mb-2'}>Brand Recognition</h3>
                        <p className={'text-gray-500'}>Boost your brand recognition with each link. Generic links don't
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
            </div>

            <div className={'bg-purple-700 mt-32 text-white flex flex-col justify-center items-center py-10'}>
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
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={'font-semibold text-lg'}>Features</h4>
                        <ul className={'text-gray-300'}>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={'font-semibold text-lg'}>Features</h4>
                        <ul className={'text-gray-300'}>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                </div>
                    <div>
                        fdasfa
                    </div>
                </div>

            </footer>
        </div>


    );
};

export default Page;
