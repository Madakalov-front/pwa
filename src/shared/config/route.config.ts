import type { DetailRoutePage } from "../types";


export const ROUTE = {
  home: "/",
  characters: {
    name: "Герои",
    list: "characters",
    detailPattern: ":id",
    detail: (id: DetailRoutePage) => `${ROUTE.characters.list}/${id}`,
  },
  locations: {
    name: "Локации",
    list: "locations",
    detailPattern: ":id",
    detail: (id: DetailRoutePage) => `${ROUTE.locations.list}/${id}`,
  },
  episodes: {
    name: "Эпизоды",
    list: "episodes",
    detailPattern: ":id",
    detail: (id: DetailRoutePage) => `${ROUTE.episodes.list}/${id}`,
  },
  notFound: "*",
} as const;
