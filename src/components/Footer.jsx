import React from 'react';
import {FaFacebookSquare, FaInstagram, FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className={'bg-[#242028] px-5 text-white pt-10 pb-20'}>
            <div className={'max-w-[1200px] mx-auto flex flex-col p-5 lg:p-0 gap-10 lg:flex-row justify-between'}>
                <div>
                    <h2 className={'text-2xl font-semibold'}>Shortly</h2>
                </div>
                <div className={'flex gap-10 flex-col lg:flex-row'}>
                    <div>
                        <h4 className={'font-semibold text-lg mb-4'}>Features</h4>
                        <ul className={'text-gray-300'}>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/"> Link Shortening </a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/"> Branded Links </a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/"> Analytics</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={'font-semibold text-lg mb-4'}>Resources</h4>
                        <ul className={'text-gray-300'}>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Blog</a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Developers</a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={'font-semibold text-lg mb-4'}>Company</h4>
                        <ul className={'text-gray-300'}>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">About</a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Out team</a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Careers</a></li>
                            <li className={'mb-2'}><a className={'hover:text-primary duration-300 transition-all'}
                                                      href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className={'flex text-3xl  gap-5 justify-center lg:justify-between items-start'}>
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
    );
};

export default Footer;
