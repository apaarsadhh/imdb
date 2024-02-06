"use client";

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


function NavbarItem({ title, param }) {
    const SearchParams = useSearchParams();
    const genre = SearchParams.get("genre");

    return (
        <div>
            <Link
                className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre && genre === param &&
                    "underline underline-offset-8 decoration-4 decoration-amber-500  rounded-lg "}`}
                href={`/?genre=${param}`}>
                {title}
            </Link>
        </div >
    )
}

export default NavbarItem