import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/homePage/HomePage.jsx";
import ContactsPage from "../../pages/contactsPage/ContactsPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "../../pages/loginPage/LoginPage.jsx";
import Layout from "../Layout/Layout.jsx";
import { PrivateRoute } from "../PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
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
