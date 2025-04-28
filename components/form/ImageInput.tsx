import { Label } from "../ui/label"
import { Input } from "../ui/input"

const ImageInput = () => {
    const name = 'image'
  return (
    <div>
        <Label className=" mb-2">
           <p> Insert the corny image here! make sure it's hot stuff before uploading! (1MB)
           </p> 
        </Label>
        <Input
        id = {name}
        name = {name}
        type="file"
        accept="image/*"
        />
    </div>
  )
}
export default ImageInput