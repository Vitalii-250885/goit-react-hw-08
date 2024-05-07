import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from "../../redux/contacts/selectors";
import { fetchContactsThunk } from "../../redux/contacts/operations";

import ContactForm from "../../components/contact-form/ContactForm";
import ContactList from "../../components/contact-list/ContactList";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";
import SearchBox from "../../components/search-box/SearchBox";
import DocumentTitle from "../../components/DocumentTitle";

const ContactsPage = () => {
  const { loading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage text={error} />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
