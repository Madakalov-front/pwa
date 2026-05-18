import { type IFetchLocations } from "./../../pages/locations-page/model/fetchLocations";
import type { LoaderFunctionArgs } from "react-router";

export const fetchLocationDetail = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Response("Location ID is required", { status: 400 });
  }

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
    if (!res.ok) {
      throw new Response("Failed to fetch location", {
        status: res.status,
      });
    }
    const data: IFetchLocations = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Response(error.message, {
        status: 500,
      });
    }
  }
};
