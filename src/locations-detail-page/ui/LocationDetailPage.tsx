import { useLoaderData, useNavigate } from "react-router";
import type { IFetchLocations } from "../../pages/locations-page/model/fetchLocations";
import { DetailItem } from "../../shared/ui";

export const LocationDetailPage = () => {
  const location = useLoaderData() as IFetchLocations;
  const navigate = useNavigate();

  const { id, name, type, dimension } = location;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="
          mb-8
          text-sm
          text-zinc-400
          hover:text-emerald-400
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
          backdrop-blur
        "
      >
        {id && (
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
        )}

        <h1 className="mb-6 text-3xl font-bold text-white">{name}</h1>

        <div className="grid gap-6 sm:grid-cols-2">
          <DetailItem label="Type" value={type} />
          <DetailItem label="Dimension" value={dimension} />
        </div>
      </article>
    </section>
  );
};
