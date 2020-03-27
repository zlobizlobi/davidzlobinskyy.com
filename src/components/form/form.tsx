import React from 'react';
import { Formik, FormikProps } from 'formik';
import {
  FormComponent,
  Field,
  Label,
  Button,
  FieldContainer,
  Error,
  Required,
  BoldHighlight,
} from './styles';
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
  return fetch('https://api.formik.com/submit/david-zlobinskyy/contact', {
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
    {({ isSubmitting, errors, touched }: FormikProps<IFormValues>) => {
      console.log(isSubmitting);
      return (
        <FormComponent>
          <FieldContainer>
            <Label htmlFor="name">
              Name <BoldHighlight style={{ fontWeight: 500 }}>*</BoldHighlight>
            </Label>
            <Field type="text" name="name" />
            <Error>
              {touched.name && errors.name && <div>{errors.name}</div>}
            </Error>
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="email">
              Email <BoldHighlight style={{ fontWeight: 500 }}>*</BoldHighlight>
            </Label>
            <Field type="email" name="email" />
            <Error>
              {touched.email && errors.email && <div>{errors.email}</div>}
            </Error>
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="message">Message</Label>
            <Field type="text" name="message" component="textarea" />
            <Error>
              {touched.message && errors.message && <div>{errors.message}</div>}
            </Error>
          </FieldContainer>
          <Required>
            Required field{' '}
            <BoldHighlight style={{ fontWeight: 500 }}>*</BoldHighlight>
          </Required>
          <Button disabled={isSubmitting}>Submit</Button>
        </FormComponent>
      );
    }}
  </Formik>
);
