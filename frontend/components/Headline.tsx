'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { MouseEventHandler } from "react";

export type HeadlineProps = {
    title: string;
    children?: React.ReactNode;
}

const Headline = ({title, children}: HeadlineProps) => {
    return(
        <div className="flex flex-row w-full items-center">
            <h1 className="font-bold text-3xl grow">{title.split(' ')[0]} <span className="text-emerald-500">{title.split(' ')[1]}</span></h1>
            <div className="flex flex-row items-center gap-2">
                {children}
            </div>
        </div>
    )
}

export default Headline