import ContactForm from "../contact-form/ContactForm.jsx";
import SearchBox from "../search-box/SearchBox.jsx";
import ContactList from "../contact-list/ContactList.jsx";

import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader.jsx";
import { selectContacts } from "../../redux/contactsSlice.js";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";

const App = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {loading && <Loader />}
      {error && <ErrorMessage text={error} />}
      <ContactList />
    </>
  );
};

export default App;
