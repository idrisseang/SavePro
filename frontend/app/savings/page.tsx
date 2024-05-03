import Headline from "@/components/Headline";
import SavingCard from "@/components/SavingCard";

export default function Home(){
    return(
        <>
            <Headline title="Your Savings" buttonText="Add a new pocket" ></Headline>
            <SavingCard/>
        </>
    )
}