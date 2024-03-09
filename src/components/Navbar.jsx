import React, {useState} from 'react';
import Image from "next/image";
import Logo from "@/images/logo.svg";
import Button from "@/components/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {


    const [open,setOpen] = useState(false);

    return (
        <nav className={'flex items-center relative  justify-between max-w-[1200px] mx-auto p-5'}>
            <div className={'flex items-center gap-10'}>
                <div>
                    <a href="/">
                        <Image src={Logo} alt={'Logo'}/>
                    </a>
                </div>
            </div>

            <div className={'justify-between hidden lg:flex w-full items-center pl-10'}>
                <ul className={'flex gap-4'}>
                    <li className={'font-semibold hover:text-gray-400 cursor-pointer text-gray-500'}><a
                        href="/">Features</a></li>
                    <li className={'font-semibold hover:text-gray-400 cursor-pointer text-gray-500'}><a
                        href="/">Pricing</a></li>
                    <li className={'font-semibold hover:text-gray-400 cursor-pointer text-gray-500'}><a
                        href="/">Resources</a></li>
                </ul>
                <div className={'flex gap-5'}>
                    <button onClick={() => window.location.href = '/'} className={'font-semibold text-gray-500'}>Login
                    </button>
                    <Button onClick={() => window.location.href = '/'}>Sign up</Button>
                </div>
            </div>


            <div className={`absolute top-[100px] transition-all duration-300 w-[100%] ${open ? 'right-[0%]' : 'right-[200%]'}`}>
                <div
                    className={' bg-secondary mx-5 text-white rounded-lg'}>
                    <ul className={'flex w-full px-10 gap-4 flex-col py-5 justify-center items-centers'}>
                        <li className={'font-semibold text-center cursor-pointer '}><a
                            href="/">Features</a></li>
                        <li className={'font-semibold text-center cursor-pointer '}><a
                            href="/">Pricing</a></li>
                        <li className={'font-semibold text-center cursor-pointer '}><a
                            href="/">Resources</a></li>
                        <div className="p-[0.2px] my-2 bg-gray-100"></div>
                        <button onClick={() => window.location.href = '/'}
                                className={'font-semibold'}>Login
                        </button>
                        <Button onClick={() => window.location.href = '/'}>Sign up</Button>
                    </ul>

                </div>
            </div>


            <div className={'cursor-pointer inline lg:hidden'} onClick={()=> setOpen(!open)}>
                {
                    open ?
                        <RxCross1 className={'text-2xl'} />
                     :
                        <RxHamburgerMenu className={'text-2xl'}/>
                }
            </div>

        </nav>
    );
};

export default Navbar;
