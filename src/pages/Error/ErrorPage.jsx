import { useRouteError } from "react-router-dom";
import {Link} from 'react-router-dom'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> Looks like this page doesn't exist.</p>
      <p>
         <i>{error.statusText || error.message}</i>
      </p>
      <div className="return-home">
        <Link to='/'>Return Home</Link> 
      </div>
    </div>
  );
}