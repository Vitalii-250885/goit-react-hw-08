import { useDispatch } from "react-redux";
import { BsPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContactThunk } from "../../redux/contacts/operations";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={css.item}>
      <div>
        <div className={css.description}>
          <BsPersonFill />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.description}>
          <BsFillTelephoneFill />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} type="button" className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
