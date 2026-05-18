import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
  useRevalidator,
} from "react-router";

export const RouteErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const { revalidate, state } = useRevalidator();
  let status = "Error";
  let message = "Something went wrong.";
  let details: string | undefined;

  const isLoading = state === "loading";

  if (isRouteErrorResponse(error)) {
    status = String(error.status);
    message = error.statusText || message;
    details =
      typeof error.data === "string"
        ? error.data
        : JSON.stringify(error.data, null, 2);
  } else if (error instanceof Error) {
    message = error.message;
    details = error.stack;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-8 text-center">
        {/* Status */}
        <p className="text-sm font-medium text-red-400 tracking-wide uppercase">
          {status}
        </p>

        {/* Title */}
        <h1 className="mt-2 text-3xl font-semibold text-white">{message}</h1>

        {/* Details */}
        {details && (
          <div className="mt-4 rounded-lg bg-slate-800 p-4 text-left">
            <pre className="text-xs text-slate-400 whitespace-pre-wrap break-words">
              {details}
            </pre>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 transition"
          >
            Go back
          </button>
          <button
            onClick={() => revalidate()}
            disabled={isLoading}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400 transition disabled:opacity-50"
          >
            {isLoading ? "Retrying..." : "Try again"}
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 transition"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
