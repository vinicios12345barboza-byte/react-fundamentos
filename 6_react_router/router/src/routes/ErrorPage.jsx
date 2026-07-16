import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();

    console.error(err)
  return (
    <div>
        <h1>Ops!</h1>
        <p>Temos um problema</p>
        <p>
            {err.statusText} - {err.error.message}
        </p>
    </div>
  )
}

export default ErrorPage