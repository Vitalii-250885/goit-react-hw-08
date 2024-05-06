import { Suspense } from "react";
import css from "./Layout.module.css";
import AppBar from "../appBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
