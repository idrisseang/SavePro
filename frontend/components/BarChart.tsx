'use client'

import React from 'react'
import { BarChart as BarGraph, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";

const data = [
    { day: "Jeu", views: 342 },
    { day: "Ven", views: 210 },
    { day: "Sam", views: 518 },
    { day: "Dim", views: 677 },
    { day: "Lun", views: 123 },
    { day: "Mar", views: 815 },
    { day: "Mer", views: 456 },
    { day: "Jeu", views: 289 },
    { day: "Ven", views: 794 },
    { day: "Sam", views: 602 },
    { day: "Dim", views: 385 },
    { day: "Lun", views: 175 }
]

export default function BarChart(){
    return (
        <ResponsiveContainer>
            <BarGraph width={100} height={350} data={data}>
                <XAxis 
                    dataKey={"views"}
                    tickLine= {false}
                    axisLine = {false}
                    stroke='#888888'
                    fontSize={12}

                />
                <YAxis
                    tickLine= {false}
                    axisLine = {false}
                    stroke='#888888'
                    fontSize={12}
                
                />
                <Bar dataKey={"day"} radius={[4,4,0,0]} isAnimationActive={true} fill='#ffffff' layout='vertical'/>
            </BarGraph>
        </ResponsiveContainer>
    )
}