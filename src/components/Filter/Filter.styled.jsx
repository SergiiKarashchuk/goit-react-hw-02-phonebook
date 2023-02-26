import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & p {
    margin-right: 10px;
    font-size: 18px;
    color: yellow;
  }
`;

export const InputFilter = styled.input`
  padding: 0 20px;
  background: white;
  line-height: 40px;
  border-radius: 50px;
  font-size: 18px;
  border: 1px solid;
  border-color: black;
`;
