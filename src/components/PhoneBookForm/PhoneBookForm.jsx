import PropTypes from 'prop-types';
import { Form, Field, FormField, Button, ErrorMessage } from './Form.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  tel: Yup.number()
    .min(10, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
});

export const PhoneBookForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhoneBookSchema}
      onSubmit={values => {
        onSubmit();
      }}
    >
      <Form>
        <FormField>
          <p>Name</p>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Назва може містити лише літери, апостроф, тире та пробіли.
            Наприклад: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <p>Tel.number</p>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

PhoneBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
