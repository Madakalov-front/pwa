import { memo } from "react";
import type { IFetchLocations } from "../../../pages/locations-page/model/fetchLocations";

const normalizeValue = (str: string) => (str && str.length > 0 ? str : "empty");

export const CardLocation = memo(
  ({ name, type, dimension }: IFetchLocations) => {
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
        p-5
        backdrop-blur
        transition-all
        duration-300
        hover:border-emerald-500/60
        hover:shadow-lg
        hover:shadow-emerald-500/10
        cursor-pointer
      "
      >
        {/* Name */}
        <h3 className="text-xl font-semibold text-white tracking-tight">
          {name}
        </h3>

        {/* Meta info */}
        <div className="flex flex-col gap-2 text-sm text-zinc-400">
          <div>
            <span className="text-zinc-500">Type: </span>
            <span className="text-zinc-200">{normalizeValue(type)}</span>
          </div>

          <div>
            <span className="text-zinc-500">Dimension: </span>
            <span className="text-zinc-200">{normalizeValue(dimension)}</span>
          </div>
        </div>
      </article>
    );
  },
);
