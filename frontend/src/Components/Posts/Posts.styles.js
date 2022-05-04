import styled from "styled-components";

export const Wrapper = styled.div`
padding: 20px;
  flex: 9;
  width: 100%;
  @media(max-width: 700px){
    padding: 10px;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
 @media(max-width: 700px){
    grid-template-columns: auto;
  }
  /* flex-wrap: wrap; */
  /* width: 500px; 
  object-fit: cover;  */
`;