import Link from "next/link"
import { Button } from "./ui/button"

export type HeadlineProps = {
    title: string;
    buttonText: string;
}

const Headline = ({title, buttonText}: HeadlineProps) => {
    return(
        <div className="flex flex-row w-full items-center">
            <h1 className="font-bold text-3xl grow">{title.split(' ')[0]} <span className="text-emerald-500">{title.split(' ')[1]}</span></h1>
            <div className="flex flex-row items-center gap-2">
                <Link href={"/savings"}>
                    <Button>{buttonText}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Headline