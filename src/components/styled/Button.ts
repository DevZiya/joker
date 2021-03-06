import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface ButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  coolor: ${(props) => props.theme.colors.white};
`;

export default Button;
