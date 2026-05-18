import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootRoute } from "./app/layout";
import { ROUTE } from "./shared/config";
import { HomePage } from "./pages/home-page";
import "./index.css";
import { CharactersDetailPage } from "./pages/characters-detail-page/ui/CharactersDetailPage";
import { fetchCharactersDetail } from "./pages/characters-detail-page/model";
import { RouteErrorBoundary } from "./pages/route-error-boundary";
import { LocationDetailPage } from "./locations-detail-page";
import { fetchLocationDetail } from "./locations-detail-page/model/fetchLocationDetail";
import { EpisodeDetailPage } from "./pages/episode-detail-page";
import { fetchEpisodeDetail } from "./pages/episode-detail-page/model";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const router = createBrowserRouter([
  {
    path: ROUTE.home,
    element: <RootRoute />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE.characters.list,
        hydrateFallbackElement: <p>Loading characters...</p>,
        lazy: async () => {
          const module = await import("./pages/characters-page");
          const { fetchCharacters } =
            await import("./pages/characters-page/model");

          return {
            Component: module.CharactersPage,
            loader: fetchCharacters,
          };
        },
      },
      {
        path: `${ROUTE.characters.list}/${ROUTE.characters.detailPattern}`,
        element: <CharactersDetailPage />,
        loader: ({ params }) => {
          const id = params.id;
          if (!id) {
            throw new Response("Not Found", { status: 404 });
          }

          return fetchCharactersDetail(id);
        },
      },
      {
        path: ROUTE.locations.list,
        hydrateFallbackElement: <p>Loading locations...</p>,

        lazy: async () => {
          const module = await import("./pages/locations-page");
          const { fetchLocations } =
            await import("./pages/locations-page/model");

          return {
            Component: module.LocationsPage,
            loader: fetchLocations,
          };
        },
      },
      {
        path: `${ROUTE.locations.list}/${ROUTE.locations.detailPattern}`,
        element: <LocationDetailPage />,
        loader: fetchLocationDetail,
      },
      {
        path: ROUTE.episodes.list,
        hydrateFallbackElement: <p>Loading episodes...</p>,
        lazy: async () => {
          const module = await import("./pages/episodes-page");
          const { fetchEpisodes } = await import("./pages/episodes-page/model");

          return {
            Component: module.EpisodesPage,
            loader: fetchEpisodes,
          };
        },
      },
      {
        path: `${ROUTE.episodes.list}/${ROUTE.episodes.detailPattern}`,
        element: <EpisodeDetailPage />,
        loader: fetchEpisodeDetail,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
