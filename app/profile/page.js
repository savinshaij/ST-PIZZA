"use client";
import React, { useState, useEffect } from 'react';
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
// Create your Next.js component
const Profile = () => {
    const { data: session } = useSession();
    const [userName, setuserName] = useState('');
    
    function handleProfileInfoUpdate(ev) {

        
    }
 
        if (session === "loading") {
            return (
                <div className="flex min-h-screen flex-col items-center justify-between p-24">
                    loading.....
                </div>
            );
        }
        else if (session === "unauthenticated") {
            redirect("/");
        }
        else {
            return (
                <>
                    <div className="flex items-center justify-center p-12 pt-44">
                        <div className="mx-auto w-full max-w-[550px]">
                            <form  onSubmit={handleProfileInfoUpdate}>
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        name="UserName"
                                        id="UserName"
                                        value={userName}
                                        placeholder="User Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                

                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md cursor-not-allowed  "
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                name="PhoneNumber"
                                                id="PhoneNumber"
                                                placeholder="**********"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="Address"
                                        id="Address"
                                        placeholder="Address"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="Country"
                                                id="Country"
                                                placeholder="Country"
                                                value="india"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label

                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="City"
                                                id="City"
                                                placeholder="City"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <button
                                        className="hover:shadow-form rounded-md  bg-orange-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            );
        }
    };

    export default Profile;
