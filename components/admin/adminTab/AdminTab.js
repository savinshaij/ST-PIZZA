"use client";
import React from 'react'
import Link from 'next/link';
import {usePathname} from "next/navigation";
function AdminTab() {
      const path = usePathname();
    return (
        <div>
            <div className=' flex items-center w-full h-[10%]  bg-white justify-center '>
                <div className='tabs flex items-center justify-center  gap-5 my-7 pt-20 text-gray-600   font-medium'>
                    <Link href={"/admin/menu-items/add"}  className={path === '/admin/menu-items/add' ? 'active' : ''}>Add Menu Items</Link>
                    <Link href={"/admin/menu-items/modify"} className={path === '/admin/menu-items/modify' ? 'active' : ''} >Modify Menu Items</Link>
                    <Link href={"/admin/users"}className={path === '/admin/users' ? 'active' : ''}>User</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminTab