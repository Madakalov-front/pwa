import { useLoaderData, useNavigate } from "react-router";

export interface CharactersDetailPapeProps {
  id?: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
}

export const CharactersDetailPage = () => {
  const { name, status, species, gender, origin, image } =
    useLoaderData() as CharactersDetailPapeProps;
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white rounded-2xl overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover filter brightness-75"
        />
        <div className="flex flex-col justify-end absolute bottom-0 left-0 h-full p-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition mb-auto w-fit cursor-pointer"
          >
            ← Back
          </button>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p
            className={`mt-1 text-lg font-semibold ${
              status === "Alive"
                ? "text-green-400"
                : status === "Dead"
                  ? "text-red-500"
                  : "text-yellow-300"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      {/* Info Card */}
      <div className="max-w-3xl mx-auto p-6 -mt-16 bg-gray-800 rounded-2xl shadow-xl relative z-10">
        <div className="flex items-center space-x-6">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-300">
              {species} — {gender}
            </p>
            <p className="text-gray-400 mt-1">Origin: {origin.name}</p>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-300">
            {/* Можно добавить bio, эпизоды или другую информацию */}
            {`${name} is a ${status.toLowerCase()} ${species} from ${origin.name}.`}
          </p>
        </div>
      </div>
    </div>
  );
};
