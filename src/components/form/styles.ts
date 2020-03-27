import styled from 'styled-components';
import { Form, Field as FieldComponent } from 'formik';

export const FormComponent = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled(FieldComponent)`
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: 7.5px 0;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.color.primary};
  padding: 15px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.secondary};
  &:last-child {
    margin: 0;
  }
`;

export const Label = styled.label`
  font-weight: 200;
  color: ${({ theme }) => theme.color.primary};
  font-size: 13px;
  margin-bottom: 5px;
`;
