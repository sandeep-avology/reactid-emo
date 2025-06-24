import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="top-header bg-[#394868]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between py-3 ">
                        <div className="">
                            <ul>
                                <li><a Link to="/about-us" className='flex items-center gap-1.5 font-[poppins] text-white'><FaPhoneAlt />Call Us : 8376817046</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className='flex gap-4'>
                                <li>< Link to="/about-us" className='font-[poppins] text-white'>Compare</Link></li>
                                <li>< Link to="/about-us" className='font-[poppins] text-white'>Wishlist</Link></li>
                                <li>< Link to="/about-us" className='font-[poppins] text-white'>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-main py-6'>
                <div className="container mx-auto px-4">
                    <div className="main-menu flex justify-between items-center">
                        <div className="main-left">
                            <div className="">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="main-right">
                            <ul className='flex gap-6'>
                                <li><Link to="#" className='font-[poppins] text-[18px] font-normal'>Home</Link></li>
                                <li>< Link to="/about-us" className='font-[poppins] text-[18px] font-normal'>Men</Link></li>
                                <li>< Link to="/about-us" className='font-[poppins] text-[18px] font-normal'>Women</Link></li>
                                <li><Link to="/about-us" className='font-[poppins] text-[18px] font-normal'>About Us</Link></li>
                                <li>< Link to="/about-us" className='font-[poppins] text-[18px] font-normal'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
