import React from 'react';
import { Formik, FormikProps } from 'formik';
import { FormComponent, Field, Label } from './styles';
import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required("What's your name?"),
  email: yup
    .string()
    .required('Your e-mail is required')
    .email('Try this:  yourname@example.com'),
  message: yup.string().max(350, "That's a bit too long, max 350 words"),
});

const handleSubmit = (values, { resetForm }: any) => {
  return fetch('https://api.formik.com/submit/david-zlobinskyy/contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then(() => {
      resetForm({});
    })
    .catch(err => {
      alert('Error, please try again later');
      console.log(err);
    });
};

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IFormValues = {
  name: '',
  email: '',
  message: '',
};

export const Form: React.FC = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting, errors, touched }: FormikProps<IFormValues>) => (
      <FormComponent>
        <Label htmlFor="name">
          Name <span style={{ fontWeight: 500 }}>*</span>
        </Label>
        <Field type="text" name="name" />
        {touched.name && errors.name && <div>{errors.name}</div>}

        <Label htmlFor="email">
          Email <span style={{ fontWeight: 500 }}>*</span>
        </Label>
        <Field type="email" name="email" />
        {touched.email && errors.email && <div>{errors.email}</div>}

        <Label htmlFor="message">Message</Label>
        <Field type="text" name="message" component="textarea" />
        {touched.message && errors.message && <div>{errors.message}</div>}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </FormComponent>
    )}
  </Formik>
);
