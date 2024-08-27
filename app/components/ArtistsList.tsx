import { Link } from "@remix-run/react";
interface ArtistProps {
  id?: string;
  name?: string;
  genre?: string;
}

interface ArtistsListProps {
  artists?: ArtistProps[];
}

function ArtistsList({ artists = [] }: ArtistsListProps) {

  let counter = 1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {artists.map(
        (artist) =>
          artist.name &&
          artist.name !== "[unknown]" && (
            <Link to={`${artist.id}`} key={artist.id}>
              <div className="flex m-8 items-center min-w-auto h-24 rounded-r-lg border bg-slate-50 border-slate-400">
                <div className="flex h-full w-1/3 items-center justify-center pr-2 rounded-r-full bg-orange-100 px-4 text-3xl font-bold">
                {counter++}
                </div>
                <div className="font-bold pl-2">{artist.name}</div>
              </div>
            </Link>
          )
      )}
    </div>
  );
}

export default ArtistsList;
