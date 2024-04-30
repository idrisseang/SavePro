import { CurrencyCard } from "@/components/CurrencyCard";
import Headline from "@/components/Headline";

export default function Home(){
    return(
        <>
            <Headline title="Savings Setup" buttonText="Add a pocket"/>
            <CurrencyCard/>
        </>
    )
}