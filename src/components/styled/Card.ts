import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface CardProps {
  theme: DefaultTheme;
}

const CardWrapper = styled.div<CardProps>`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  margin: 15px 0;
  white: 650px;
  height: 180px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.8);
  font-size: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardTop = styled.div<CardProps>`
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex:auto;
    &:hover {
        filter: brightness(0.85);
    }
`;
const Setup = styled.p<CardProps>`
  font-size: 16px;
  flex:1; 
`;
const Delivery = styled.p<CardProps>`
  font-size: 16px;
  flex:1; 
  font-weight: 500;
`;
const CardBottom = styled.div<CardProps>`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color:#fff;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export { CardWrapper, CardTop, Setup, Delivery, CardBottom };
