import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();
  // You can pass -1 into navigate(-1) to go back 1 page (like clicking 'back')

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  });

  return (
    <div id='coming-soon'>
      <h1>Coming soon.</h1>
    </div>
  );
};

export default ComingSoon;
