import styled from 'styled-components';

export const FormBox = styled.form`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
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

export const InputName = styled.input`
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: black;
  line-height: 30px;
  border-radius: 5px;
  font-size: 20px;
`;

export const InputTel = styled(InputName)``;

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
