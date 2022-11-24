import styled from "styled-components";

export const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 270px;
  padding: 5px;
`;

export const BtnDelete = styled.button`
  height: 30px;
  margin-top: 10px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: #ff0000;
    color: #ffffff;
  }
`;

export const ContactStyled = styled.p`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  min-width: 300px;
`;
