import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DocumentTitle from "../components/DocumentTitle";

import ContactForm from "../components/contact-form/ContactForm";
import SearchBox from "../components/search-box/SearchBox";
import ContactList from "../components/contact-list/ContactList";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Loader from "../components/loader/Loader";
import { fetchContactsThunk } from "../redux/contacts/operations";
import { selectContacts } from "../redux/contacts/slice";
// import { fetchTasks } from '../../redux/tasks/operations';
// import { selectLoading } from '../../redux/tasks/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const { loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>

      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {loading && <Loader />}
      {error && <ErrorMessage text={error} />}
      <ContactList />
    </>
  );
}
