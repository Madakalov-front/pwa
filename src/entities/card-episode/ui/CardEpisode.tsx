import { memo } from "react";
import type { IFetchEpisodes } from "../../../pages/episodes-page/model";

export const CardEpisode = memo(
  ({ name, air_date, episode: code }: IFetchEpisodes) => {
    return (
      <article
        className="
        group
        relative
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        p-6
        transition-all
        duration-300
        hover:border-cyan-500/60
        hover:shadow-lg
        hover:shadow-cyan-500/10
        cursor-pointer
      "
      >
        {/* Episode Code */}
        <span
          className="
          absolute
          top-4
          right-4
          rounded-full
          bg-zinc-800
          px-3
          py-1
          text-xs
          font-medium
          text-zinc-400
          group-hover:text-cyan-400
          transition-colors
        "
        >
          {code}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {name}
        </h3>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>Aired:</span>
          <span className="text-zinc-200">{air_date}</span>
        </div>
      </article>
    );
  },
);
