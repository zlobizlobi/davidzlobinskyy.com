import React, { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import {
  FormComponent,
  Field,
  Label,
  Button,
  FieldContainer,
  Error,
  Required,
  SubmitMessage,
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

export const Form: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (
    values: IFormValues,
    { resetForm }: { resetForm: ({ }) => void }
  ) => {
    return fetch('https://api.formik.com/submit/david-zlobinskyy/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(() => {
        setIsSubmitted(true);
        resetForm({});
      })
      .catch(err => {
        alert('Error, please try again later');
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }: FormikProps<IFormValues>) => (
        <FormComponent>
          {!isSubmitted && (
            <>
              <FieldContainer>
                <Label htmlFor="name">Name *</Label>
                <Field type="text" name="name" />
                <Error>
                  {touched.name && errors.name && <div>{errors.name}</div>}
                </Error>
              </FieldContainer>
              <FieldContainer>
                <Label htmlFor="email">Email *</Label>
                <Field type="email" name="email" />
                <Error>
                  {touched.email && errors.email && <div>{errors.email}</div>}
                </Error>
              </FieldContainer>
              <FieldContainer>
                <Label htmlFor="message">Message</Label>
                <Field type="text" name="message" component="textarea" />
                <Error>
                  {touched.message && errors.message && (
                    <div>{errors.message}</div>
                  )}
                </Error>
              </FieldContainer>
              <Required>Required field *</Required>
              <Button disabled={isSubmitting}>Submit</Button>
            </>
          )}
          {isSubmitted && (
            <SubmitMessage>
              Your message is on its way to me
              <span role="img" aria-label="hands up">
                🙌
              </span>
              <span role="img" aria-label="alien monster">
                👾
              </span>
              <span role="img" aria-label="one hundred">
                🎉
              </span>
            </SubmitMessage>
          )}
        </FormComponent>
      )}
    </Formik>
  );
};
