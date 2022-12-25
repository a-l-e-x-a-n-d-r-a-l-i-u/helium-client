import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
};

const ErrorBoundary = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  const navigate = useNavigate();
  // navigate(-1) will take you back 1 page (like clicking 'back')

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "We couldn't find the page you were looking for" });
    }, 5000);
  }, []);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
    </div>
  );
};

export default ErrorBoundary;
