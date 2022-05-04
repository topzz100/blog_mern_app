import styled from "styled-components";

export const Wrapper = styled.div`
display: none;
@media(max-width: 700px){

  height: 50px;
  width: 100%;
  /* background-color: grey; */
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid black;
}
`;
export const Content = styled.div`
  width: 100%;
  padding: 0 10px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    display: flex;
    align-items: center;
  }
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }


`;