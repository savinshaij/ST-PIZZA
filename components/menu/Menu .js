"use client";

import React from "react"


export default function Menu() {



    return (
        <div className="bg-gray-100  min-h-[90vh] ">
            <div className=" text-center py-8 font-poppins font-semibold">
            <h2 class="text-lg text-gray-900 font-semibold md:text-xl">Check out</h2>
            <h2 class="text-3xl  text-orange-600 font-bold md:text-4xl">Our Best Sellers</h2>
            </div>

<div className=" flex items-center justify-center py-10 ">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-20 mx-9 max-w-5xl">
                {/* Pricing Card 1 */}
                <div className=" bg-white  overflow-hidden shadow-lg transition-transform transform hover:scale-105  rounded-3xl">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/pizza6.jpg" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold  text-gray-900 ">chicken pizza</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">


                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 ">$599</span>
                            <a href="#" className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
                        </div>
                    </div>
                </div>

                {/* Pricing Card 2 */}
                <div className=" bg-white rounded-3xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/pizza2.jpg" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold  text-gray-900 ">mutton pizza</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">


                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 ">$599</span>
                            <a href="#" className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
                        </div>
                    </div>
                </div>

                {/* Pricing Card 3 */}
                <div className=" bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 ">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src="/pizza3.jpg" alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-lg font-semibold  text-gray-900 ">paneer pizza</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            
                  
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 ">$599</span>
                            <a href="#" className="text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
 
    );


}


