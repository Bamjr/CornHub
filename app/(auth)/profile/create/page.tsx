
import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/formContainer";
import Forminput from "@/components/form/forminput";
import { Luckiestfont } from "@/utils/fonts";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";




const CreateProfile = async () => {
    const user = await currentUser()
    if(user?.privateMetadata.hasProfile) redirect('/')

    return (
        <section className={`${Luckiestfont.variable}`}>
            <h1 className="text-2xl text-center mb-8 font-subtitle text-[#F0B000] hover:text-[#EDB85B]">
                Welcome to CornHub! Create your profile 🌽
            </h1>
            <div className=" border p-8 rounded-md max-w-md mx-auto shadow-md">
                <FormContainer action={createProfileAction}>
                    <Forminput name="username"
                        label="Username"
                        type="text"
                        placeholder="Enter your corniest name, here dont be freaky okay?"
                    />

                    <Forminput name="pronouns"
                        label="Pronouns"
                        type="text"
                        placeholder="be who you are queer"
                    />

                    <Forminput name="bio"
                        label="Corn quriks"
                        type="text"
                        placeholder="shortly, Tell us how corny you are, what quirk you have"
                    />

                    <div>
                        <SubmitButton text="Create your Corn Profile" size="lg" variant="default" />
                    </div>

                </FormContainer>



            </div>

        </section>
    )
}
export default CreateProfile