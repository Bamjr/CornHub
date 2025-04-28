import { Slackey } from "next/font/google"
import { Luckiest_Guy } from "next/font/google";
import { Itim } from "next/font/google";

export const SlackerFont =  Slackey({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-slacker",
});

export const Luckiestfont = Luckiest_Guy({ 
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-luckiest-guy',
})
export const ItimFont = Itim({
    subsets: ['latin','thai'],
    weight: ['400'],
    variable: '--font-Itim',
})

