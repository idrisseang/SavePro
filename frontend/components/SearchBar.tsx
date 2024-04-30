import { SearchIcon } from "lucide-react"
export default function SearchBar(){
    return(
        <div className="w-50 border rounded-md p-2 flex flex-row items-center gap-4 hover:cursor-pointer hover:bg-muted ">
            <SearchIcon className="text-muted-foreground"/>
            <p className="text-sm text-muted-foreground flex flex-row gap-4">
                    Search...
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-sm">⌘</span> K
                </kbd>
            </p>
      </div>
    )
}