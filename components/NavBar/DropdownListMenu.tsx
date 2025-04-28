import { AlignLeft, UserIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import Link from 'next/link';
import { Links } from '@/utils/Links';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';




const DropdownListMenu = () => {
  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <AlignLeft />
          <UserIcon />
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <SignedOut>
          <DropdownMenuItem className='flex flex-col gap-2'>
            <SignUpButton mode="modal">
              <button className='text-current hover:text-[#F0B000]'>
                Sign up
              </button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button className='text-current hover:text-[#F0B000]'>
                Log in
              </button>
            </SignInButton>

          </DropdownMenuItem>


        </SignedOut>
        
        
        <SignedIn>

          
          {
            Links.map((item, index) => {
              return <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>

              </DropdownMenuItem>


            })

          }
          <DropdownMenuSeparator />
          <SignOutLinks />
        </SignedIn>

        
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
export default DropdownListMenu