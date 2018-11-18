import styled from "styled-components";

const Sidebar = styled.aside`
  grid-area: sidebar;
  padding: 1rem 1.5rem;
  background-color: rgb(0, 95, 44);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    max-height: 10rem;
  }
`;
export default Sidebar;
