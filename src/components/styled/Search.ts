import styled from "styled-components";
import { DefaultTheme } from "styled-components";

//default theme isletmek isdersem
interface SearchProps {
  theme: DefaultTheme;
}

const Search = styled.input<SearchProps>`
  margin: 10px 15px 10px 0;
  padding: 10px;
  width: 15rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
`;

export default Search;
