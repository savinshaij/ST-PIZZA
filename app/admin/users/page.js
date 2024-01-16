"use client";
import AdminTab from '@/components/admin/adminTab/AdminTab'
import Link from 'next/link';
import React from 'react'

function Users() {
  return (
    <div className=' flex justify-center  w-full h-screen '>
      <div className=' w-full h-full'>
        <AdminTab/>
        <div className=' rounded-3xl h-[80%] mx-10  px-6 py-6 bg-gray-100  '>
          users
        </div>
      </div>


    </div>
  )
}

export default Users