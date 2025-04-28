'use server'

import { CornSchema, imageSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from '@/utils/db'
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";


const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error('You must logged the corn in first')
    }

    if (!user.privateMetadata.hasProfile) redirect('/profile/create')

    return user

}

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : "Something went wrong...wat did you do not cool mate :(",
    }

};

//const profileSchema = z.string().min(3,{message: "Username must be at least 3 characters long"}).max(20,{message: "Username must be at most 20 characters long"})

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser()
        if (!user) throw new Error('YOU! Logged the corn in')

        const rawData = Object.fromEntries(formData)
        const validatedField = validateWithZod(profileSchema, rawData)
        //console.log('validated', validatedField)

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedField

            }
        })
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

        //return { message : "Profile created successfully"};

    } catch (error) {
        //console.log(error);
        return renderError(error);
    }

    redirect('/')

};

export const createCornAction = async (prevState: any, formData: FormData): Promise<{message: string}> => {
    try {
        const user = await getAuthUser()
        

        const rawData = Object.fromEntries(formData)
        const file = formData.get('image') as File
        
        //step 1 Validate date
        const validatedFile = validateWithZod(imageSchema,{ image:file})
        const validatedField = validateWithZod(CornSchema,rawData);

        //step 2 upload image to supabase
        const fullPath = await uploadFile(validatedFile.image)
        //console.log(fullPath)

        //step 3 to db
        await db.landmark.create({
            data:{
                ...validatedField,
                image:fullPath,
                profileId:user.id
            }
        })



        // return { message : "your corn data created successfully"};

    } catch (error) {
        //console.log(error);
        return renderError(error);
    }

    redirect('/')

};

export const fetchCorn = async({search='',category}:{search?:string,category?:string})=>{
    const Corns = await db.landmark.findMany({
        where:{
            category,
            OR:[
                {name:{contains:search,mode:'insensitive'}},
                {description:{contains:search,mode:'insensitive'}},
                {location:{contains:search,mode:'insensitive'}},
                {category:{contains:search,mode:'insensitive'}}
                
            ]

        },
        orderBy:{
            createdAt:'desc'
        }
    })
    return Corns
};

export const fetchCornHero = async()=>{
    const Corns = await db.landmark.findMany({
        orderBy:{
            createdAt:'desc'
        },
        take:5
    })
    return Corns
};

export const fetchFavoriteId = async({landmarkId}:{landmarkId:string})=>{
    const user = await getAuthUser()
    const favorite = await db.favorite.findFirst({
        where:{
            landmarkId:landmarkId,
            profileId:user.id
        },
        select:{
            id:true
        }
    })
    return favorite?.id || null

}

export const toggleFavoriteAction = async(prevState:{
    favoriteId: string | null;
    landmarkId: string;
    pathname:string;
})=>{
    const{ favoriteId,landmarkId,pathname} = prevState
    const user = await getAuthUser()
    

    try{
        if(favoriteId){
            await db.favorite.delete({
                where:{
                    id:favoriteId
                }
            })
        }else{
            await db.favorite.create({
                data:{
                    landmarkId:landmarkId,
                    profileId:user.id,

                },
            });
        }
        revalidatePath(pathname)

        return {message: favoriteId
            ? 'Removed from favorite'
            :'Add favorite',
        };

    }catch(error){ 
        return renderError(error)
        
    }
};

export const fetchFavorits = async() =>{
    const user = await getAuthUser()
    const favorites = await db.favorite.findMany({
        where:{
            profileId: user.id
        }, select:{
            landmark:{
                select:{
                    id:true,
                    name:true,
                    description:true,
                    image:true,
                    price:true,
                    location:true,
                    lat:true,
                    lng:true,
                    category:true
                }
            }
        }
    })

    return favorites.map((favorite)=>favorite.landmark)
}

export const fetchLandmarkDetail = async({id}:{id:string}) =>{
    return db.landmark.findFirst({
        where:{
            id:id
        },
        include:{
            profile:true
        }
    })

}