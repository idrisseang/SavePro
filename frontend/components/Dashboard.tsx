'use client'
import Headline from "@/components/Headline";
import Stats from "@/components/Stats";
import ChartCard from "@/components/ChartCard";
import { Card, CardContent} from "@/components/ui/card";

export default function Dashboard(){
    return(
        <>
            <Headline title="Savings Dashboard" buttonText="See savings details"/>
            <Stats/>
            <section className="grid grid-col-1 gap-4 transition-all lg:grid-cols-2">
                <ChartCard/>
                <Card>
                    <CardContent>
                        <div className="p-4 flex flex-col gap-8">
                            <section>
                                <p className="font-semibold">Savings Breakdown</p>
                                <p className="text-sm text-gray-400"> See the Breakdown of all your savings here. </p>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}