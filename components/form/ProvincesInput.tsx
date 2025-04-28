
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { provinces } from "@/utils/provinces"


const ProvincesInput = ({defaultValue}:{defaultValue?:string}) => {

    const name = 'location'

    return (
        <div className="flex flex-col gap-2 mb-2 ">
            <Label htmlFor={name} >Corntry | locorntion </Label>

            <Select
            defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
            name={name}
            required
            
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="choose" />
                </SelectTrigger>
                <SelectContent>

                    {
                        provinces.sort((a, b) => a.PROVINCE_NAME.localeCompare(b.PROVINCE_NAME))
                        .map((item) => {
                            return (
                            <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME} >
                                <span className='capitalize flex flex-row gap-2  items-center'>
            
                                    {item.PROVINCE_NAME}
                                </span>
                            </SelectItem>
                            );

                        })
                    }


                </SelectContent>
            </Select>


        </div>
    )
}
export default ProvincesInput