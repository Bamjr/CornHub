import { describe } from "node:test";
import {z,ZodSchema} from "zod"


export const profileSchema = z.object({
    username : z.string().min(3,{message: "Username must be at least 3 characters long"}).max(20,{message: "Username must be at most 10 characters long"}),
    pronouns : z.string().min(2,{message: "pronous must be at least 2 characters long"}).max(20,{message: "pronous must be at most 20 characters long"}),
    bio : z.string().min(10,{message: "bio must be at least 10 characters long"}).max(100,{message: "bio must be at most 100 characters long"}),
});

const validateImage = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File).refine((file)=>{
        return file.size <= maxFileSize
    },'File size must be less than 1MB')
}

export const imageSchema = z.object({
    image: validateImage()
})

export const CornSchema = z.object({
    name: z.string()
    .min(3,{message: 'must be longer than three characters'})
    .max(60,{message:'must be less than 30 characters'}),
    category: z.string(),
    description: z.string()    
    .min(3,{message: 'must be longer than three characters'})
    .max(1000,{message:'must be less than 1000 characters'}),
    price: z.coerce.number().int().min(0,{message: 'this is worth than that, cant be less than 0, k?'}),
    location: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),

})

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown):T => {
    const result = schema.safeParse(data)
    if(!result.success){
        const Errors = result.error?.errors.map((error)=> error.message)
        throw new Error(Errors?.join(", "))
    }

    return result.data
}