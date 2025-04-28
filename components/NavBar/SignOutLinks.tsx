'use client'
import { SignOutButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { toast } from "sonner"


const SignOutLinks = () => {
  return (
    <SignOutButton redirectUrl="/">
        <Button variant={"outline"} 
        className="text-current hover:text-[#F0B000]"
        onClick={() => toast("You have signed out successfully",
        {description:"Cum back soon!",
        action:{
            label: "close",
            onClick: () => console.log("close"),
        },
        })}>
            Sign out
        </Button>
    </SignOutButton>
  )
}
export default SignOutLinks