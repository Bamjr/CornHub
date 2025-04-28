
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { categories } from "@/utils/categories"


const CategoryInput = ({defaultValue}:{defaultValue?:string}) => {

    const name = 'category'

    return (
        <div className="flex flex-col gap-2 mb-2 ">
            <Label htmlFor={name} >{name}</Label>

            <Select
            defaultValue={defaultValue || categories[0].label}
            name={name}
            required
            
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="choose" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item) => {
                            return (
                            <SelectItem key={item.label} value={item.label} >
                                <span className='capitalize flex flex-row gap-2  items-center'>
                                    <item.icon/>
                                    {item.label}
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
export default CategoryInput