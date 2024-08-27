import { Link } from "@remix-run/react";
import { Artist } from "~/data/artists.server";

export default function ArtistComponent({
  id,
  name,
  gender,
  country,
  score,
}: Artist) {
  return (
    <div
      key={id}
      className="flex flex-col items-center my-20 p-8 bg-slate-100 border-1 border-slate-600 rounded-lg max-w-96 "
    >
      <div className="text-orange-400 text-3xl py-2">{name}</div>
      <div className="py-1">
        Gender: {gender ? gender : "No info on gender"}
      </div>
      <div className="py-1">
        Country: {country ? country : "No info on country"}
      </div>
      <div className="py-1">
        Music Brainz score: {score ? score : "No score for this artist"}
      </div>
      <Link
        to="/artists"
        className="mt-56 p-4 bg-orange-400 hover:bg-orange-600 rounded-lg"
      >
        Back to all artists
      </Link>
    </div>
  );
}
