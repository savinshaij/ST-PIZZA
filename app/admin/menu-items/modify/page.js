"use client";
import React from 'react'
import AdminTab from '@/components/admin/adminTab/AdminTab'

export default function ModifyMenuItems() {

  return (
    <div className=' flex justify-center  w-full h-screen '>
      <div className=' w-full h-full'>
        <AdminTab />
        <div className=' rounded-3xl h-[80%] mx-10  px-6 py-6 bg-gray-100   overflow-y-scroll'>
        </div>
      </div>
    </div>
  )
}