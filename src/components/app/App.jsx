import { Route, Routes } from "react-router-dom";

import { Layout } from "../Layout";
import ContactsPage from "../../pages/contactsPage/ContactsPage";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
