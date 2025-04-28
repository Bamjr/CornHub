
import { createCornAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/formContainer";
import Forminput from "@/components/form/forminput";
import MapLandmark from "@/components/map/MapLandmark";
import ProvincesInput from "@/components/form/ProvincesInput";
import TextareaInput from "@/components/form/TextareaInput";
import { Luckiestfont } from "@/utils/fonts";
import ImageInput from "@/components/form/ImageInput";




const CreateProfile = async () => {
    return (
        <section className={`${Luckiestfont.variable}`}>
            <h1 className="text-2xl text-center mb-8 font-subtitle text-[#F0B000] hover:text-[#EDB85B]">
                feeling silly? Create your own corn data relate 🌽
            </h1>

            <div className="border p-8 rounded-md max-w-4xl mx-auto shadow-md">
                <FormContainer action={createCornAction}>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left side - Form */}
                        <div className="flex-1 space-y-4">
                            <Forminput
                                name="name"
                                label="Choose the corn name, you are their parent."
                                type="text"
                                placeholder="eg. little evil corn"
                            />

                            <CategoryInput />
                            <TextareaInput name="description" />

                            <Forminput
                                name="price"
                                label="how much do you think this worth? in corn coins"
                                type="number"
                                placeholder="eg. 100"
                            />

                            <ProvincesInput />

                            <div className="mt-4">
                                <SubmitButton text="Add your own corn to the world" size="lg" variant="default" />
                            </div>
                        </div>

                        {/* Right side - Map */}
                        <div className="flex-1">
                            <ImageInput />
                            <MapLandmark  />
                        </div>
                    </div>
                </FormContainer>
            </div>
        </section>
    );
};

export default CreateProfile;
