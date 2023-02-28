import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
  background: white;
  border-radius: 5px;
  & label {
    display: block;
    & p {
      display: block;
      margin-bottom: 5px;
    }
  }
`;

export const FormField = styled.label`
  cursor: pointer;
`;

export const Field = styled(FormikForm)`
  display: block;
  height: 20px;
  padding: 0 20px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: black;
  line-height: 30px;
  border-radius: 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  margin: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border: 1px solid black;
  font-size: 17px;
  border-radius: 5px;
  font-weight: 700;
  color: black;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
