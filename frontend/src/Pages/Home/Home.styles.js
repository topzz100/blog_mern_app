import styled from "styled-components";


export const Main = styled.div`
  display: flex;
  width: 100%;
  .sideBar{
    flex: 3;
    width: 100%;
  }
  @media(max-width: 700px){
    .sideBar{
      display: none;
    }
  }
`;