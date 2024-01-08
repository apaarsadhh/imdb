"use client";

import React from 'react'
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme()


    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <>
            {currentTheme === "dark" ? (
                <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />

            ) : (
                <FaMoon className="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
            )
            }

        </>
    )
}
