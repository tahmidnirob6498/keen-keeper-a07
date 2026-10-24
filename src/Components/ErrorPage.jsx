  import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#f7faf8] px-6 py-16 text-center">
      {/* soft background decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#244D3F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />

      <section className="relative w-full max-w-xl">
        <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-3xl border border-[#244D3F]/10 bg-white shadow-xl shadow-[#244D3F]/10">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            className="h-12 w-12"
          >
            <path
              d="M15 16.5a9 9 0 0 1 18 0c0 5-4.5 6-6.3 9.5-.5 1-.7 2-.7 3"
              stroke="#244D3F"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M24 36v.1M10 24H6m36 0h-4M12.7 12.7 10 10m28 28-2.7-2.7m0-22.6L38 10m-28 28 2.7-2.7"
              stroke="#80A895"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#56806d]">
          Page not found
        </p>

        <h1 className="text-7xl font-black tracking-tight text-[#244D3F] sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-slate-800 sm:text-3xl">
          Looks like this page wandered off
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500">
          The page you’re looking for may have moved, been removed, or never
          existed. Let’s get you back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="btn border-0 bg-[#244D3F] px-7 text-white shadow-lg shadow-[#244D3F]/20 hover:bg-[#19392e]"
          >
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn border-[#244D3F]/15 bg-white px-7 text-[#244D3F] hover:bg-[#244D3F]/5"
          >
            Go back
          </button>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;