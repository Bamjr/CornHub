'use client'

import { toggleFavoriteAction } from "@/actions/actions"
import FormContainer from "../form/formContainer"
import { usePathname } from "next/navigation";
import { Cardsubmitbutton } from "../form/Buttons";

const FavoriteToggleForm = ({ favoriteId, landmarkId }
    : { favoriteId: string | null; landmarkId: string; }) => {
    const pathname = usePathname()
    const toggleAction = toggleFavoriteAction.bind(null,{favoriteId,landmarkId,pathname});
    return (
        <FormContainer action={toggleAction}>
            <Cardsubmitbutton isFavorite={favoriteId? true:false}/>
        </FormContainer>
    )
}
export default FavoriteToggleForm