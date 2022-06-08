import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface WrapperProps {
  theme: DefaultTheme;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 80rem;
  padding: 20px;
  margin: 0 auto;
 // background-color: ${(props) => props.theme.colors.white};
`;

export default Wrapper;
