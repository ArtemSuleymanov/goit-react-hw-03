import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!!!")
      .max(50, "Too long!!!")
      .required("Required!"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 123-45-67")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <div className={s.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>
            Name
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label>
            Number
            <Field type="text" name="number" className={s.input} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit" className={s.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
