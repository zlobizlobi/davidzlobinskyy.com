import React, { useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form as FormikForm, Formik, Field as FieldComponent } from 'formik';
import Flex from './Flex';

export const validationSchema = yup.object({
  name: yup.string().required("What's your name?"),
  email: yup
    .string()
    .required('Your e-mail is required')
    .email('Try this:  yourname@example.com'),
  message: yup.string().max(350, "That's a bit too long, max 350 words"),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
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
      {({ isSubmitting, errors, touched }) => (
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
}

export const FormComponent = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FieldContainer = styled(Flex)`
  margin-bottom: 25px;
  flex-direction: column;
`;

export const Field = styled(FieldComponent)`
  border: 2px solid #243141;
  border-radius: 5px;
  padding: 7.5px 0;
  color: #243141;
  padding: 15px;
  font-size: 16px;
  background-color: transparent;
`;

export const Label = styled.label`
  font-weight: 400;
  color: #243141;
  font-size: 13px;
  margin-bottom: 5px;
`;

export const Error = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: red;
`;

export const Required = styled.span`
  font-size: 13px;
  margin: 10px 0 20px 0;
  color: #243141;
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 10px 20px;
  background-color: transparent;
  color: #243141;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid #243141;
  border-radius: 5px;
  align-self: flex-end;

  :hover {
    background-color: #243141;
    color: white;
  }
`;

export const BoldHighlight = styled.span`
  font-weight: 400;
`;

export const SubmitMessage = styled.span`
  color: #fff;
  align-self: center;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 400;

  > span {
    font-size: 30px;
    margin-left: 10px;
  }
`;
