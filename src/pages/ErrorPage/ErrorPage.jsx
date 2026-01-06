import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>

        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </p>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
