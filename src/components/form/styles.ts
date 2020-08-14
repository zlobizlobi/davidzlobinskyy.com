import styled from 'styled-components';
import { Form, Field as FieldComponent } from 'formik';
import { Flex } from '../flex';

export const FormComponent = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FieldContainer = styled(Flex)`
  margin-bottom: 25px;
  flex-direction: column;
`;

export const Field = styled(FieldComponent)`
  border: 2px solid ${({ theme }) => theme.color.secondary};
  padding: 7.5px 0;
  color: ${({ theme }) => theme.color.secondary};
  padding: 15px;
  font-size: 16px;
  background-color: transparent;
`;

export const Label = styled.label`
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondary};
  font-size: 13px;
  margin-bottom: 5px;
`;

export const Error = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Required = styled.span`
  font-size: 13px;
  margin: 10px 0 20px 0;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  align-self: flex-end;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const BoldHighlight = styled.span`
  font-weight: 400;
`;

export const SubmitMessage = styled.span`
  color: ${({ theme }) => theme.color.secondary};
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
