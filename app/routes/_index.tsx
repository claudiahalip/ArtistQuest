import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "ArtistQuest" },
    { name: "description", content: "Welcome to ArtistQuest App!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center font-mono p-4 h-96">
      <h1 className="text-3xl text-center py-10">ArtistQuest</h1>
      <p className="text-center w-[800px]">
        ArtistQuest is your gateway to discovering music’s greatest talents.
        Explore a collection of pop artists, dive into detailed profiles, and
        uncover the stories behind the music. Whether you’re searching for
        legends or new favorites, ArtistQuest provides you with rich information
        about each artist, powered by the comprehensive MusicBrainz database.
      </p>
      <div className="flex">
        <button className="bg-orange-300 px-3 py-2 m-3 hover:bg-orange-400 rounded-lg overflow-hidden">
          <Link to="/artists">See artists</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
}
