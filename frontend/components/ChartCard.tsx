import { Card, CardContent } from "@/components/ui/card";
import BarChart from "@/components/BarChart";

export default function ChartCard(){
    return(
        <Card>
            <CardContent>
              <p className="p-4 font-semibold">Savings Progress</p>
              <div className="w-[100%] h-[350px]">
                <BarChart/>
              </div>
            </CardContent>
        </Card>
    )
}