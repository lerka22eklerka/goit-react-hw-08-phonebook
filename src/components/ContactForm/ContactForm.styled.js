import styled from "styled-components";


export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid black;
  padding: 15px;
  /* padding-left: 40px; */
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 300px;
  height: 20px;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 600;
`;

export const BtnStyled = styled.button`
height: 30px;
margin-top: 10px;
font-weight: 700;
border-radius: 3px;
cursor: pointer;
transition: 300ms;
&:hover {
  background-color: #ff0000;
  color: #ffffff
}
`;
