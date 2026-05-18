import { useLoaderData, useNavigate } from "react-router";
import { DetailItem } from "../../../shared/ui";
import type { IFetchEpisodes } from "../../episodes-page/model";

export const EpisodeDetailPage = () => {
  const episode = useLoaderData() as IFetchEpisodes;
  const navigate = useNavigate();

  const { id, name, air_date, episode: code, created } = episode;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="
          mb-10
          text-sm
          text-zinc-400
          hover:text-cyan-400
          transition-colors
        "
      >
        ← Back
      </button>

      <article
        className="
          relative
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/80
          p-10
          shadow-xl
        "
      >
        {/* ID */}
        <span
          className="
            absolute
            top-6
            right-6
            rounded-full
            bg-zinc-800
            px-4
            py-1
            text-xs
            text-zinc-400
          "
        >
          ID: {id}
        </span>

        {/* Episode Code */}
        <div className="mb-6 text-sm text-cyan-400 font-medium tracking-wide">
          {code}
        </div>

        {/* Title */}
        <h1 className="mb-8 text-3xl font-bold text-white tracking-tight">
          {name}
        </h1>

        {/* Metadata Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          <DetailItem label="Air Date" value={air_date} />
          <DetailItem
            label="Created"
            value={new Date(created).toLocaleString()}
          />
        </div>
      </article>
    </section>
  );
};
