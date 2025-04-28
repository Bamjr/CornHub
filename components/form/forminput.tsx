import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ForminputProps = {
    name: string,
    type: string,
    label?: string,
    defaultValue?: string,
    placeholder?: string,
    rows?: number,
    maxLength?: number,
    className?: string,
}


const Forminput = (props:ForminputProps) => {
    const {name,type,label,defaultValue,placeholder} = props;
    return (
        <div>
            <Label htmlFor={name} className="mb-2 ">{label}</Label>
            <Input type={type} 
            name={name} 
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="mb-2 w-full max-w-sm" />
        </div>
    )
}
export default Forminput

