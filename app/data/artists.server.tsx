import axios from "axios";

export interface Artist {
  id?: string;
  name?: string;
  gender?: string;
  country?: string;
  score?: number;
}

interface MusicBrainzResponse {
  artists: Artist[];
}

export async function fetchArtists(limit: number = 100): Promise<Artist[]> {
  try {
    const response = await axios.get<MusicBrainzResponse>(
      "https://musicbrainz.org/ws/2/artist/",
      {
        params: {
          query: "tag:pop",
          fmt: "json",
          limit: Math.min(limit, 100),
        },
      }
    );
    return response.data.artists;
  } catch (error) {
    console.error("Error fetching artists:", error);
    return [];
  }
}

