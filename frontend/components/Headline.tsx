import Link from "next/link"
import { Button } from "./ui/button"

const Headline = () => {
    return(
        <div className="flex flex-row w-full items-center">
            <h1 className="font-bold text-3xl grow">Savings <span className="text-emerald-500">Dashboard</span></h1>
            <div className="flex flex-row items-center gap-2">
                <Link href={"/savings"}>
                    <Button>See savings details</Button>
                </Link>
            </div>
        </div>
    )
}

export default Headline