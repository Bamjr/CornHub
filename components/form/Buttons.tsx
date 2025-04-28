'use client'
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle, Heart } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";
import { LogIn } from 'lucide-react';

type btnSize = 'default' | 'sm' | 'lg' | 'icon';
type btnVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

type SubmitButtonProps = {
    size?: btnSize,
    text?: string,
    variant?: btnVariant,
    className?: string,
}

export const SubmitButton = ({ size, text, variant, className }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={pending}
            type="submit"
            size={size}
            variant={variant}
            className={className}
        >
            {
                pending ? <><LoaderCircle className="animate-spin" /> <p>{text}</p></>
                    : <p>{text}</p>
            }

        </Button>
    );
};

export const SignInCardButton = () => {
    return (
        <SignInButton mode="modal">
            <Button size="icon">
                <LogIn />
            </Button>
        </SignInButton>

    );

};

export const Cardsubmitbutton = ({ isFavorite }: { isFavorite: boolean }) => {
    const { pending } = useFormStatus()
    return <Button type='submit' size='icon'>{
        pending
            ? <LoaderCircle className="animate-spin"/>
            : isFavorite
                ? <Heart fill="black"/>
                : <Heart />
    }
    </Button>;

};