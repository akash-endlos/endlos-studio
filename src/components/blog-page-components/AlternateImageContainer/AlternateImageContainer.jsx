import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const AlternateImageContainer = ({filteredData}) => {
    const LeftContainer = ({id,name,src,alt}) => (
        <>
                    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={src} alt={alt} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            </a>

                            <Link href={`blog/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#111111] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#111111] dark:focus:ring-gray-800">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
        </>
    )
    return (
        <div className='bg-[#111111] text-white'>
            <div className='max-w-screen-2xl grid xl:grid-cols-2 md:grid-cols-1 gap-5 mx-auto px-10'>
               {filteredData && filteredData.map((item,key)=>(
                   <>
                   <LeftContainer id={item?.id} name={item.name} src={item.src} alt={alt} />
                   </> ))}
            </div>

        </div>
    )
}

export default AlternateImageContainer











