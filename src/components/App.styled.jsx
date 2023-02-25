import styled from 'styled-components';

export const AppBox = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  text-align: center;
  background-color: grey;
  & h1,
  h2 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
  }
`;
