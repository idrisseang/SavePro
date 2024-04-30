'use client'

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export type StatCardProps = {
  cardTitle: string;
  stat: number;
  description: string;
}
export function StatCard({cardTitle, stat, description}: StatCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
            <div className="flex flex-row items-center justify-between w-full">
                {cardTitle}
            </div>
        </CardTitle>
        <CardDescription>
            <span className="text-emerald-500 font-bold text-2xl mb-2">{stat} </span>
            <span className="flex flex-row items-center gap-2 flex-wrap justify-between w-full">( {description} ) 
            </span>
        </CardDescription>
      </CardHeader>
      
    </Card>
  )
}
