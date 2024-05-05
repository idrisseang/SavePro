import Headline from "@/components/Headline";
import PocketForm from "@/components/PocketForm";
import SavingCard from "@/components/SavingCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Home(){
    return(
        <>
            <Headline 
            title="Your Savings" children={
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add a new pocket</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[460px]">
                        <DialogHeader>
                        <DialogTitle className="tracking-wide">Create a new saving pocket 💰</DialogTitle>
                        <DialogDescription className="pt-2">
                            Enter all the details and click on <span className="bg-muted py-0.5 px-1 rounded-md">create pocket</span> when you're done.
                        </DialogDescription>
                        </DialogHeader>
                        <PocketForm/>
                    </DialogContent>
                </Dialog>
            }></Headline>
            <SavingCard/>
        </>
    )
}