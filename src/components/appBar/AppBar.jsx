import { useSelector } from "react-redux";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";

import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
