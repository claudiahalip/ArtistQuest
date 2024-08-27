import { Link, useParams } from "@remix-run/react";
import ArtistComponent from "../components/ArtistComponent";
import { useDataContext } from "../data/context/DataContext";

export default function ArtistPage() {
  const params = useParams();
  const { data } = useDataContext();
  const artist = data.find((artist) => artist?.id === params.id);
 
  if (!artist) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center my-20 p-8 bg-slate-100 border-1 border-slate-600 rounded-lg max-w-96">
          Artist not found
          <Link
            to="/artists"
            className="mt-56 p-4 bg-orange-400 hover:bg-orange-600 rounded-lg"
          >
            Back to all artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <ArtistComponent
        id={artist?.id}
        name={artist?.name}
        gender={artist?.gender}
        country={artist?.country}
        score={artist?.score}
      />
    </div>
  );
}
