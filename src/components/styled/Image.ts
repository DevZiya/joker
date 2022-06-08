import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface ImageProps {
  theme: DefaultTheme;
}

const Image = styled.img<ImageProps>`
width:100px;
height:100px;
border-radius:50%;
`;

export default Image;
