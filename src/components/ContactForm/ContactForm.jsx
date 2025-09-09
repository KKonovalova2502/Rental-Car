import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  contactNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Enter a valid phone number')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactNumber,
      }),
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        contactName: '',
        contactNumber: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.fieldgroup}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.input}
            type="text"
            name="contactName"
            id={nameFieldId}
          ></Field>
          <ErrorMessage
            className={style.error}
            name="contactName"
            component="span"
          ></ErrorMessage>
        </div>
        <div className={style.fieldgroup}>
          <label className={style.label} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={style.input}
            type="tel"
            name="contactNumber"
            id={telFieldId}
          ></Field>
          <ErrorMessage
            className={style.error}
            name="contactNumber"
            component="span"
          ></ErrorMessage>
        </div>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
