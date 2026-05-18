import type { DetailRoutePage } from "../../../shared/types";

export const fetchCharactersDetail = async (id: DetailRoutePage) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
};
