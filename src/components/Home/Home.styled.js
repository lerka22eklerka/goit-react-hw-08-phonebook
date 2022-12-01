import styled from "styled-components";
import hurry from '../../img/hurry.png';
export const HomeBox = styled.div`
  padding-left: 40px;
  height: 200px;
  background-image: url(${hurry});
  background-repeat: no-repeat;
  background-position-y: 70%;
  background-position-x: 40px;
`;

export const HomeTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ff0000;
  margin-top: 0;
  margin-bottom: 10px;
`;