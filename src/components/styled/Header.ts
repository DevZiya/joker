import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface HeaderProps {
  theme: DefaultTheme;
}

const Header = styled.h1<HeaderProps>`
 font-size:4em;
 margin:0,32px;
 color:${(props) => props.theme.colors.main};
`;

export default Header;
