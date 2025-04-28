'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Forward } from 'lucide-react';
import { Button } from "../ui/button";
import {
    TwitterShareButton,
    FacebookShareButton,
    LineShareButton,
    EmailShareButton,
    TwitterIcon,
    FacebookIcon,
    LineIcon,
    EmailIcon
} from 'react-share'


const ShareButton = ({ landmarkId, name }: { landmarkId: string; name: string }) => {

    const url = process.env.NEXT_PUBLIC_WEBSITE_URL
    const sharelink = `${url}/landmark/${landmarkId}`

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='outline'>
                    <Forward />
                </Button>

            </PopoverTrigger>
            <PopoverContent
                side='top'
                align='end'
            >
                <div className="flex justify-around">
                    <FacebookShareButton url={sharelink} name={name} >
                        <FacebookIcon size={'50px'} className="rounded" />
                    </FacebookShareButton>

                    <TwitterShareButton url={sharelink} name={name}>
                        <TwitterIcon size={'50px'} className="rounded"/>
                    </TwitterShareButton>

                    <LineShareButton url={sharelink} name={name}>
                        <LineIcon size={'50px'} className="rounded"/>
                    </LineShareButton>

                    <EmailShareButton url={sharelink} name={name}>
                        <EmailIcon size={'50px'} className="rounded"/>
                    </EmailShareButton>

                </div>

            </PopoverContent>
        </Popover>

    )
}
export default ShareButton