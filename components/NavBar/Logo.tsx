import Link from "next/link";
import { Button } from "../ui/button";
import { House } from 'lucide-react';


    



const Logo = () => {
  return (
    <Button size="sm" variant='outline' className="text-primary" asChild>
      <Link href="/" >
      <House/>
        Home
      </Link>
    </Button>
  );
};
export default Logo;