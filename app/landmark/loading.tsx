import { Popcorn } from 'lucide-react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center p-50 space-y-10'>
            <div className='animate-spin'>
                <Popcorn size='180px' color='#F0B000'/>
            </div>
            <p className='text-4xl animate-pulse text-[#F0B000]'>
                loading... please be patient!
            </p>
        </div>
    )
}
export default Loading