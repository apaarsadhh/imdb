import React from 'react'
import MenuItem from './MenuItem'
import { IoHomeSharp } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import Link from 'next/link';


export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>


      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoHomeSharp} />
        <MenuItem title="ABOUT" address="/about" Icon={MdInfo} />
      </div>

      <div className=''>
        <Link href="/">
          <h2 className="text-2xl">
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
            <span className='text-xl hidden sm:inline '>Clone</span>
          </h2>
        </Link>
      </div>

    </div>
  )
}
