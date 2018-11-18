import styled from "styled-components";

const App = styled.div`
  min-height: 100vh;
  font-family: Verdana;
  display: grid;
  grid-template-areas:
    "header"
    "navigation"
    "content"
    "footer";

  @media only screen and (min-width: 600px) {
  }
`;
export default App;
