import styled from "styled-components";


export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const LogoutBtn = styled.button`
  border-radius: 3px;
  border: none;
  line-height: 1.5;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 1px 1px #000;
  background-color: #ff0000;
  cursor: pointer;
  outline: 3px solid #ff0000;
  transition: 300ms;
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
  &:hover,
  &.active {
    background-color: lightgrey;
    outline: 3px solid #000000;
    color: #000000;
  }
`;

export const User = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
`;