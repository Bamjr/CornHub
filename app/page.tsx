import LoadingCard from "@/components/card/LoadingCard";
import CornContainer from "@/components/home/CornContainer";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{ search?: string; category?: string }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { search, category } = await searchParams;

  return (
    <Suspense fallback={<LoadingCard />}>
      <CornContainer search={search} category={category} />
    </Suspense>
  );
}
