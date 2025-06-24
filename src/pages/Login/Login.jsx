import React from "react";
import Logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-form bg-[#111315] px-4 h-[100vh] flex items-center justify-center font-[poppins]">
            <div className="form-wrapper w-full max-w-[758px]">
                <div className="company-brand text-center mb-[50px]">
                    <img src={Logo} alt="company brand" className="max-w-3xs mx-auto w-full" />
                </div>
                <div className="form-inner bg-[#292C2D] rounded-[50px] py-7 lg:py-[75px] px-7 lg:px-28">
                    <div className="">
                        <div className="mb-6 lg:mb-12 text-center">
                            <h2 className="text-2xl lg:text-5xl text-white mb-3 lg:mb-6  font-bold text-center">Login!</h2>
                            <p className="text-[16px] text-white">Please enter your credentials below to continue</p>
                        </div>

                        <div className="">
                            <form action="#">
                                <div className="mb-7">
                                    <label className="block text-white font-medium text-[16px] mb-1">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        autoComplete="new-username"
                                        className="w-full px-6 py-2.5 lg:py-[19px] rounded-[10px] text-[#777979] bg-[#3D4142]  outline-0"
                                    />
                                </div>
                                <div className="mb-7">
                                    <label className="block text-white font-medium text-[16px] mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        autoComplete="new-password"
                                        className="w-full px-6 py-2.5 lg:py-[19px] rounded-[10px] bg-[#3D4142] text-[#777979] outline-0"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <input type="checkbox" className="w-[24px] h-[24px] accent-theme hover:accent-theme" />
                                        <label className="text-[#FAC1D9] text-[18px] font-[400]">Remember me</label>
                                    </div>
                                    <div className="">
                                        <p className="mb-0">
                                            <Link to="/dashboard" className="text-theme text-[18px] underline">
                                                Forgot Password?
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-7 text-center">
                                    <input type="submit" value="Login" className="bg-[#FAC1D9] cursor-pointer border-[1px] border-theme transition-all  text-[#333333] hover:bg-transparent hover:text-theme font-[500] text-[16px] px-[50px] py-[20px] rounded-[10px]" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login