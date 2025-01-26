import { RiContactsFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={s.contact}>
      <p>
        <RiContactsFill className={s.icon} /> {name}
      </p>
      <p>
        <BsTelephoneFill className={s.icon} /> {number}
      </p>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
