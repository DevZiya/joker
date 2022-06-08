import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface RowProps {
  theme: DefaultTheme;
}

const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  //background-color: ${(props) => props.theme.colors.white};
`;

export default Row;
