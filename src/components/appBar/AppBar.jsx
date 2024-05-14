import { AuthNav } from "../authNav/AuthNav";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../userMenu/UserMenu";

import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
