import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const TEXT_BTN_FORM = "Add contact";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimal chars is 3")
    .max(50, "You can type up to 50 chars")
    .required("This field is required!"),
  number: Yup.string()
    .min(3, "Minimal chars is 3")
    .max(50, "You can type up to 50 chars")
    .required("This field is required!"),
});

const ContactForm = ({ onSubmit }) => {
  const initContact = {
    id: "no id",
    name: "",
    number: "",
  };

  return (
    <>
      <Formik
        initialValues={initContact}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        {() => {
          return (
            <Form className={style.form}>
              <label className="form-label">
                name
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-danger"
                />
              </label>

              <label className={style.formLabel}>
                number
                <Field name="number" type="text" className="form-control" />
                <ErrorMessage
                  name="number"
                  component="span"
                  className="text-danger"
                />
              </label>

              <button type="submit" className="btn btn-primary">
                {TEXT_BTN_FORM}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
