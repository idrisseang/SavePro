'use client'

import Link from "next/link";
import React from "react";
import Search from "./Search";
import { ThemeToggle } from "./ThemeToggle";
import Avatar from "./ProfilePicture";
import { sections } from "@/lib/sections";


export default function Header(){
    
    return(
        <div className="p-4 flex flex-row items-center gap-40">
            
            {/* Section Logo + Barre de recherche */}
            <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
            <div className="w-[30px] h-[30px] bg-emerald-500 rounded-full flex items-center justify-center font-bold">
                S 
            </div>
            <div className="font-bold text-2xl">
                Save<span className="text-emerald-500">Pro.</span>
            </div>
            </div>
            <Search/>
            </div>
            
            <div className="flex flex-row items-center w-full">
                {/* Section Liens */}
                <div className="text-sm text-muted-foreground flex flex-row gap-8 grow font-bold">
                    {sections.map((section, sectionKey) => {
                        return(
                        <Link href={section.text === "Overview" ? "/" : section.text.toLowerCase()} key={sectionKey} className="hover:text-emerald-500 flex flex-row items-center gap-2">
                            {React.createElement(section.icon)}
                            {section.text}
                        </Link>

                        )})}
                </div>
                

                {/* Section toggle mode + photo de profil */}
                <div className="flex flex-row gap-4 mr-4">
                    <ThemeToggle/>
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}