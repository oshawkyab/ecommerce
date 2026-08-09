import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()

  // vars for errors text and status
  let errorMessage: string;
  let errorStatus: number;

  // check error from react-router-dom or not
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText
    errorStatus = error.status
  } else {
    errorMessage = "Page is not found";
    errorStatus = 404
  }

  return (

    <div className="pt-64 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl mb-2 font-dark font-bold">{errorStatus}</div>
          <p
            className="text-2xl md:text-3xl font-light leading-normal"
          >{errorMessage}</p>
          <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

          <Link to={"/"} replace={true}>
            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg! focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Back to homepage</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Error