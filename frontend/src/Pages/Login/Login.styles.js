import styled from "styled-components";

export const Wrapper = styled.div`
padding: 20px;
height: calc(100vh - 50px);

display: flex;
justify-content: center;
align-items: center;
/* height: calc(100vh-50px); */
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    background-size: cover;
   
    height: calc(100vh-50px);

position: relative;
`;
export const Content = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center; 
  flex-direction: column;
  /* align-items: center  */
  h4{
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: 30px;
    }
  form{
     display: flex;
    flex-direction: column; 
    /* align-items: center; */
    justify-content: center; 
    label{
      margin: 10px 0;
    }
    input{
      padding: 10px;
      border-radius: 5px;
      border: none;
      outline: none;
    }
    button{
      width: 100%;
      margin: 20px 0;
      padding: 10px 25px;
      background-color: red;
      border-radius: 10px;
      font-size: .9rem;
      font-weight: 500;
      color: white;
      border: none;
      cursor: pointer;
    }
   
  } 
  .reg{
      background-color: green;
      padding: 10px 15px;
      position: absolute;
      top: 20px;
      right: 20px;
      color: white;
      border-radius: 10px;
      cursor: pointer;
      font-size: .9rem;
      font-weight: 500;
      width: fit-content;
      margin: 0;
      border: none;
    }
`;