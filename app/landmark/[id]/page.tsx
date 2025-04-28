import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumb";
import Description from "@/components/landmark/description";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareButton from "@/components/landmark/ShareButton";
import MapLandmark from "@/components/map/MapLandmark";
import { redirect } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function LandmarkDetail({ params }: PageProps) {
  const { id } = params;

  const landmark = await fetchLandmarkDetail({ id });

  if (!landmark) {
    redirect('/');
  }

  return (
    <section>
      <Breadcrumbs name={landmark.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold">{landmark.name}</h1>
        <div className="flex items-center p-5 gap-x-4">
          <ShareButton landmarkId={landmark.id} name={landmark.name} />
          <FavoriteToggleButton landmarkId={landmark.id} />
        </div>
      </header>

      <section>
        <ImageContainer mainImage={landmark.image} name={landmark.name} />
        <Description description={landmark.description} />
        {landmark.lat !== 0 && landmark.lng !== 0 && (
          <MapLandmark location={{ lat: landmark.lat, lng: landmark.lng }} />
        )}
      </section>
    </section>
  );
}

  
