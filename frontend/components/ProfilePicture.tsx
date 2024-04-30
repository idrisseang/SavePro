import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePicture(){
    return(
        <Avatar>
            <div className="bg-muted-foreground">
            <AvatarImage src="https://api.dicebear.com/8.x/lorelei/svg?seed=Trouble" />
            </div>
            <AvatarFallback>Profile pic</AvatarFallback>
        </Avatar>

    )
}