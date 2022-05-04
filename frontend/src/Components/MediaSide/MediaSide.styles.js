import styled from "styled-components";

export const Wrapper = styled.div`
display: none;
position: relative;
width: 100vw;
height: calc(100vh-50px);
@media(max-width: 700px){
  display: block;
}

`;
export const Content = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 70%;
  height: 100%;
  /* background-color: grey; */
  z-index: 9999;
  .links{
    
    flex-direction: column;
    list-style: none;
     background-color: white; 
     width: 100%;
     height: 90vh;
     a{
       text-decoration: none;
       color: inherit;
     }

    li{
      padding: 15px 10px;
      font-size: 1.1rem;
      text-transform: uppercase;
      font-weight: 500;
      cursor: pointer;
    }
     li.logOut{
      font-size: 1rem;
      background-color: lightgray;
      border-radius: 5px;
      border: none;
      color: black;
      padding: 5px 8px;
      font-weight: 600;
      margin-left: 15px;
    }
    
  }
  .socials{
      display: flex;
      justify-content: center;
      align-items: center;
      /* li{
        display: inline-flex;
      } */
      li{
        list-style: none;
        margin: 5px;
        cursor: pointer;
      }
    }


`;