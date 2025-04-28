export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string }>

export type CornCardProps = {
    id: string;
    name: string;
    description:string;
    image: string;
    category: string;
    location: string;
    price: number;
    lat: number;
    lng: number;
};