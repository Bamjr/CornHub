import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const TextareaInput = ({ name, labelText, defaultValue }: { name: string, labelText?: string, defaultValue?: string }) => {

    return (
        <div className="flex flex-col gap-1 mb-2">
            <Label htmlFor={name}>{labelText || name}</Label>
            <Textarea
                id={name}
                name={name}
                defaultValue={defaultValue}
                rows={5}
                required
            />
        </div>
    )
}
export default TextareaInput