"use client";

import React from 'react'
import Image from 'next/image';
import AdminTab from '@/components/admin/adminTab/AdminTab'
import { useState } from 'react';

function AddMenuItem() {
  const [images, setImages] = useState([]);
  const handleFileChange = (event) => {
    event.preventDefault()
    const files = Array.from(event.target.files).map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      preview: ['jpg', 'jpeg', 'png', 'gif'].includes(file.name.split('.').pop().toLowerCase()),
      size: file.size > 1024
        ? file.size > 1048576
          ? Math.round(file.size / 1048576) + 'mb'
          : Math.round(file.size / 1024) + 'kb'
        : file.size + 'b',
    }));

    setImages(files);
  };
  return (
    <div className=' flex justify-center  w-full h-screen '>
      <div className=' w-full h-full'>
      <AdminTab/>
        <div className=' rounded-3xl h-[80%] mx-10  px-6 py-6 bg-gray-100   overflow-y-scroll'>
       

          <div className="  p-4 py-8" data-x-data="{ images: [] }">

            <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-2xl">
              <input className="name bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg" spellCheck="false" placeholder="Name" type="text" />
              <input className="price bg-gray-100 border border-gray-300 p-2 mb-4 outline-none rounded-lg" spellCheck="false" placeholder="Price" type="number" />

              <div className="icons flex text-gray-500 m-2">
                <label id="select-image">
                  <div className='flex gap4'>

                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <p>select image</p>
                  </div>

                  <input hidden type="file" multiple onChange={handleFileChange} />
                </label>

              </div>

              <div id="preview" className="my-4 flex">
                {images.map((image, index) => (
                  <div className="relative w-32 h-32 object-cover rounded" key={index}>
                    {image.preview ? (
                      <div className="relative w-32 h-32 object-cover rounded">
                        <img src={image.url} className="w-32 h-32 object-cover rounded" />
                        <button onClick={() => setImages((prevImages) => prevImages.filter((_, i) => i !== index))} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span className="mx-auto">×</span></button>
                        <div>{image.size}</div>
                      </div>
                    ) : (
                      <div className="relative w-32 h-32 object-cover rounded">
                        <svg className="fill-current w-32 h-32 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                        </svg>
                        <button onClick={() => setImages((prevImages) => prevImages.filter((_, i) => i !== index))} className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"><span className="mx-auto">×</span></button>
                        <div>{image.size}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="buttons flex justify-end">
                <div className="btn rounded-lg border border-orange-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-orange-600">Add</div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default AddMenuItem