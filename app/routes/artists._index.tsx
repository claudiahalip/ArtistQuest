
import { json, Outlet, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import ArtistsList from "~/components/ArtistsList";
import { fetchArtists } from "~/data/artists.server";
import { useDataContext } from "~/data/context/DataContext";

export default function Index() {
  const artists = useLoaderData<typeof loader>();
  const { setData } = useDataContext();
  useEffect(() => {
     setData(artists);
   }, [artists, setData]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full font-bold text-3xl mx-20 pt-20 pl-20 pb-4 border-b-2 border-b-slate-100">
        Artists List
      </div>
      <ArtistsList artists={artists} />
      <Outlet />
    </div>
  );
}

export async function loader() {
  const artists = await fetchArtists(100);
  return json(artists);
}
