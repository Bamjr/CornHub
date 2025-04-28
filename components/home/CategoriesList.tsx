import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({ search, category }: { search?: string; category?: string }) => {

    const searchTerm = search ? `&search=${search}` : ''

    return (
        <div>
            <div className="flex justify-around items-center mt-5 bg-[#F0B000]">
                {

                    categories.map((item) => {
                        const isActive = item.label === category
                        return (
                            <Link
                                href={`/?category=${item.label}${searchTerm}`}
                                key={item.label}
                            >
                                <article className={`flex p-3 flex-col justify-center items-center transition-transform duration-200 ease-in-out hover:scale-130 ${isActive ? 'text-3xl':''}`}>
                                    <item.icon />
                                    <p>{item.label}</p>
                                </article>

                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoriesList