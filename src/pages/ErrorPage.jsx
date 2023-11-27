import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const { status, statusText } = useRouteError()

  return (
    <div className='grid h-screen px-4 bg-white place-content-center'>
      <h1 className='tracking-widest text-gray-500 uppercase'>
        {status} | {statusText}
      </h1>
    </div>
  )
}

export default ErrorPage
