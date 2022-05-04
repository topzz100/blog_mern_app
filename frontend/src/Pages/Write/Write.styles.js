import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(max-width: 700px){
    padding: 20px 10px;
  }
  
  img{
    /* margin-top: 30px; */
    width: 70%;
    object-fit: cover;
    border-radius: 10px;
    height: 250px;
    @media(max-width: 700px){
      width: 100%;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  form{
    width: 70%;
    display: flex;
    flex-direction: column;
     @media(max-width: 700px){
      width: 100%;
    }
  }
  .formGroup{
    margin-top: 30px;
  }
  .inputFile{
    display: flex;
    align-items: center;
  }
  .addFile{
    margin-right: 10px;
   i{
     color: grey;
     border: 1px solid ;
     padding: 5px;
     border-radius: 50%;
     cursor: pointer;
   }
  }
  .inputTitle{
    width: 100%;
    padding: 10px;
    font-size: 1.3rem;
    border: none;
    outline: none;
  }
  textarea{
    width: 100%;
    padding: 10px;
    font-size: .9rem;
    height: 100vh;
    border: none;
    outline: none;
  }
  
  button{
    position: absolute;
    top: 20px;
    right: 0;
    background-color: green;
    color: white;
    padding: 10px 15px;
    border-radius: 7px;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }

`;