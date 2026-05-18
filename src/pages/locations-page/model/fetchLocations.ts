export interface IFetchLocations {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export const fetchLocations = async (): Promise<IFetchLocations[]> => {
  const res = await fetch("https://rickandmortyapi.com/api/location?page=1");
  const data = await res.json();
  const { results } = data;
  return results;
};
