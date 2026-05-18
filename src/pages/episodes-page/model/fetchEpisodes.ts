export interface IFetchEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const fetchEpisodes = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/episode?page=1");
    if (!res.ok) {
      throw new Response("HTTP error status code - ", { status: res.status });
    }
    const data = await res.json();
    const results: IFetchEpisodes[] = data.results;
    return results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Response(error.message, { status: 500 });
    }
  }
};
