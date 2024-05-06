import { Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

export const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
