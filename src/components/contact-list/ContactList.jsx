import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../contact/Contact";

import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length) {
    return (
      <ul className={css["contact-list"]}>
        {filteredContacts.map((contactItem) => (
          <Contact
            key={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
            id={contactItem.id}
          />
        ))}
      </ul>
    );
  }

  return null;
};

export default ContactList;
