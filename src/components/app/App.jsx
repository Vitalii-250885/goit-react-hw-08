import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";

import HomePage from "../../pages/homePage/HomePage.jsx";
import ContactsPage from "../../pages/contactsPage/ContactsPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "../../pages/loginPage/LoginPage.jsx";
import Layout from "../Layout/Layout.jsx";
import { PrivateRoute } from "../PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
