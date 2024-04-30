'use client'

import { StatCard } from "./StatCard"
import { statsSections } from "@/lib/statsSections"
const Stats = () => {
    return(
        <div className="flex flex-row gap-6">
            {statsSections.map((section, sectionKey) => {
                return <StatCard
                cardTitle={section.title} 
                stat={section.stat} 
                description={section.description} 
                key={sectionKey}
                />
            })}
        </div>
    )
}

export default Stats