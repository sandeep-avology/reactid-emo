import React from 'react';
import Logo from '../../assets/images/logo.png';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='footer bg-[#394868] '>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 py-12">
                    <div className="">
                        <div className="footer-logo mb-2.5">
                            <img src={Logo} alt="" />
                        </div>
                        <p className=' my-4 text-[16px] w-full max-w-[300px] text-white  block pb-2.5 font-[poppins]'>Your One-Stop Destination for Everything Fashion</p>
                        <div className='social-icon'>
                            <ul className="flex gap-4">
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="text-white text-[20px]" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF className="text-white text-[20px]" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter className="text-white text-[20px]" />
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-white font-bold text-[24px] mb-2.5 font-[poppins]'>Category</h2>
                        <div className="">
                            <ul>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Fashion</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Cosmetics</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Bags & Purse</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Shoes</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Belts</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Perfumes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-white font-bold text-[24px] mb-2.5 font-[poppins]'>Company</h2>
                        <div className="">
                            <ul>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Fashion</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Cosmetics</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Bags & Purse</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Shoes</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Belts</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Perfumes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-white font-bold text-[24px] mb-2.5 font-[poppins]'>Contact</h2>
                        <div className="">
                            <ul>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Fashion</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Cosmetics</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Bags & Purse</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Shoes</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Belts</a></li>
                                <li><a href="" className='text-white text-[16px] block pb-2.5 font-[poppins]'>Perfumes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fac1d9] py-4 ">
                <div className="container mx-auto px-4">
                    <p className='text-center'>Copyright © 2025 The Mantu all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;
