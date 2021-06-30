import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Flex from './Flex';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm('xrgrllqz');

  if (state.succeeded) {
    navigate('/contact-success');
    return;
  }

  return (
    <FormComponent autoComplete="on" onSubmit={handleSubmit}>
      <FieldContainer>
        <Label htmlFor="name">Name *</Label>
        <Field type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="email">Email *</Label>
        <Field type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FieldContainer>
      <FieldContainer>
        <Label htmlFor="message">Message</Label>
        <Textarea type="text" name="message" />
        <Error>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Error>
      </FieldContainer>
      <Required>Required field *</Required>
      <Button disabled={state.submitting}>Submit</Button>
    </FormComponent>
  );
}

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Textarea = styled.textarea`
  border: 2px solid #243141;
  border-radius: 5px;
  padding: 7.5px 0;
  color: #243141;
  padding: 15px;
  font-size: 16px;
  background-color: transparent;
  min-height: 300px;
`;

export const FieldContainer = styled(Flex)`
  margin-bottom: 25px;
  flex-direction: column;
`;

export const Field = styled.input`
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
