"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function SavingProgressBar() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progress + 20), 100
    })
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[100%]" />
}
