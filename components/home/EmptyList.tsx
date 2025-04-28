import Link from "next/link";
import { Button } from "../ui/button"
import { SearchX } from 'lucide-react';

const EmptyList = ({
    heading = "Can't find what you are looking for",
    message = 'Please try again later, our database might not update',
    btnText = 'back to home',
}: {
    heading?: string; message?: string; btnText?: string;
}) => {
    return (
        <div className="flex flex-col items-center p-20">
            <SearchX size='180px'/>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p>{message}</p>
            <Button asChild>
                <Link href='/'>
                {btnText}
                </Link>
                
            </Button>
        </div>
    )
}
export default EmptyList