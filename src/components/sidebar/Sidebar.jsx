import React from "react";
import logo from "../../assets/images/sidebar-logo.png";
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar bg-[#292C2D] h-[100vh] py-8 px-7 w-44 flex flex-col justify-between">
            <div className="top-bar">
                <div className="sidebar-logo mb-6">
                    <img src={logo} alt="" />
                </div>
                <div className="side-links">
                    <div className="">
                        <ul>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all bg-[#fac1d9] mb-2.5">Dashboard</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all mb-2.5 hover:bg-[#fac1d9]">Menu</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all mb-2.5 hover:bg-[#fac1d9]">Staff</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all mb-2.5 hover:bg-[#fac1d9]">Inventory</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all mb-2.5 hover:bg-[#fac1d9]">Reports</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all mb-2.5 hover:bg-[#fac1d9]">Order/Table</a></li>
                            <li><a href="#" className="text-white text-[18px] p-3 block rounded-[9px] font-[poppins] transition-all  mb-2.5 hover:bg-[#fac1d9]">Reservation</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="logout">
                <ul>
                    <li>
                        <a href="#" className="text-white text-[18px] p-3 block rounded-[9px] transition-all text-center font-[poppins]">
                            <FaSignOutAlt className="block text-center mx-auto mb-1.5" />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;