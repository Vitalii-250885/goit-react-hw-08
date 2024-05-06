import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contacts/selectors";

import ContactForm from "../../components/contact-form/ContactForm";
import ContactList from "../../components/contact-list/ContactList";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Loader from "../../components/loader/Loader";
import SearchBox from "../../components/search-box/SearchBox";

const ContactsPage = () => {
  const { loading, error } = useSelector(selectContacts);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage text={error} />}
      <ContactList />
    </>
  );
};

export default ContactsPage;
