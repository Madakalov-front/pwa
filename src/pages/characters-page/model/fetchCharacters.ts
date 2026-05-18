export interface IFetchCharacters {
  id: number;
  name: string;
  image: string;
}

export const fetchCharacters = async (): Promise<IFetchCharacters[]> => {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const data = await res.json();
  const { results } = data;
  return results;
};
