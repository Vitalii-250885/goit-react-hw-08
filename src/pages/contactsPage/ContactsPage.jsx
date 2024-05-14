import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from "../../redux/contacts/selectors";
import { fetchContactsThunk } from "../../redux/contacts/operations";

import ContactForm from "../../components/contact-form/ContactForm";
import SearchBox from "../../components/search-box/SearchBox";
import Loader from "../../components/loader/Loader";
import ContactList from "../../components/contact-list/ContactList";

import { ErrorMessage } from "formik";

const ContactsPage = () => {
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
export default ContactsPage;
