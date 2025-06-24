import React from 'react';
import Category1 from "../../../assets/images/Category-1.jpg"
import Category2 from "../../../assets/images/Category-2.jpg"

export const Partition = () => {
    return (
        <div className='py-10'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 px-4">
                    {/* Men Section */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={Category1}
                            alt="Men Fashion Sale"
                            className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-[#00000042] bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-xl md:text-3xl font-bold">Men 20% Off</p>
                        </div>
                    </div>

                    {/* Women Section */}
                    <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={Category2}
                            alt="Women Fashion Sale"
                            className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-[#00000042] bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-xl md:text-3xl font-bold">Women 20% Off</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Partition;
