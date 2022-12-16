import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  // You can pass -1 into navigate(-1) to go back 1 page (like clicking 'back')

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });

  return (
    <>
      {/* <div id='error-page'> */}
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p><i>{error.statusText || error.message}</i></p> */}
      {/* </div> */}
    </>
  );
};

export default ErrorPage;
