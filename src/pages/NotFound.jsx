import { Link, useRouteError } from "react-router-dom"
function NotFound() {
  const error=useRouteError()
  console.log(error)
    return (
    <div>
        <h1>404</h1>
        <p>Página no encontrada</p>
        <p>{error.statusText ||error.message}</p>
        <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default NotFound