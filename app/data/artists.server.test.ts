import axios from "axios";
import { fetchArtists, Artist } from "./artists.server";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchArtists", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of artists on successful API call", async () => {
    const mockArtists: Artist[] = [
      { id: "1", name: "Artist 1", gender: "Male", country: "US", score: 100 },
      { id: "2", name: "Artist 2", gender: "Female", country: "UK", score: 90 },
    ];
    const mockResponse = { data: { artists: mockArtists } };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchArtists(10);

    expect(result).toEqual(mockArtists);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://musicbrainz.org/ws/2/artist/",
      {
        params: {
          query: "tag:pop",
          fmt: "json",
          limit: 10,
        },
      }
    );
  });

  it("should handle API errors and return an empty array", async () => {
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    const result = await fetchArtists(10);

    expect(result).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching artists:",
      expect.any(Error)
    );
    consoleErrorMock.mockRestore();
  });
});
