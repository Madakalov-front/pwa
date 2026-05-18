import type { LoaderFunctionArgs } from "react-router";
import type { IFetchEpisodes } from "../../episodes-page/model";

export const fetchEpisodeDetail = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Response("Episode ID is required", { status: 400 });
  }

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    if (!res.ok) {
      throw new Response(res.statusText, { status: res.status });
    }
    const data: IFetchEpisodes = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Response(error.message, { status: 500 });
    }
  }
};
