import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { SavingProgressBar } from "./SavingProgressBar";
import { Separator } from "./ui/separator";



export type SavingCardType = {
    name: string;
    goalAmount: number;
}

export default function SavingCard(){
    return(
        <Card className="w-[300px]">
        <CardHeader className="text-center border-b-2 rounded-t-xl bg-muted">
            <CardTitle className="text-xl font-bold tracking-wider">CAR FUND</CardTitle>
            <CardDescription>A fund to buy my car next year</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-0">
            <div className="text-center">
                <p className="text-2xl font-bold text-emerald-500 pt-2">$ 2,000.00</p>
                <p className="tracking-widest text-xs font-semibold text-muted-foreground">TOTAL SAVINGS</p>
            </div>
            <SavingProgressBar/>
            <Separator/>

            <div className="text-muted-foreground text-sm font-semibold tracking-wide mb-4 p-6 pt-0">
                <p className="flex justify-between items-center"> 🏦 Start Balance <span className="text-white">$ 500.00</span></p>
                <p className="flex justify-between items-center"> 🎯 Goal Amount <span className="text-white">$ 4900.00</span></p>
                <p className="flex justify-between items-center"> 💸 Left to Save <span className="text-white">$ 4400.00</span></p>
                <p className="flex justify-between items-center"> ⏳ Est. Months Left <span className="text-white">5</span> </p>
                <p className="flex justify-between items-center"> 🌱 Progress to Goal <span className="text-white">10%</span> </p>
            </div>
        </CardContent>
    </Card>
    );
}