"use client"
import React, {useState, useEffect} from "react"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import SearchBar from "./SearchBar"
import { sections } from "@/lib/sections"
import Link from "next/link"
import { StickyNote, LinkIcon } from "lucide-react"
  
  export default function Search() {
    const [open, setOpen] = React.useState(false)
  
    React.useEffect(() => {
      const down = (event: KeyboardEvent) => {
        if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
  
    return (
        <>
        <button onClick={() => setOpen(true)}>
        <SearchBar/>
        </button>
        
            <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Search for a page..." />
            <CommandList>
                <CommandEmpty>No pages found !</CommandEmpty>
                <CommandGroup heading="Pages">
                    {sections.map((section, sectionKey) => {
                        return (
                            <CommandItem key={sectionKey}>
                                <Link href={section.text === "Overview" ? "/" : section.text.toLowerCase()} className="flex flex-row gap-2">
                                <StickyNote/>
                                {section.text}
                                </Link>
                                {/* Rajouter des raccourcis : ex : ajouter une pocket, etc. */}
                            </CommandItem>
                        )
                    })}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
      </>
    )
  }
  