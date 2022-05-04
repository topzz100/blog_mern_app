import styled from 'styled-components'
export const Wrapper = styled.div`

`;
export const Content = styled.div`
  display: flex;
  .sideBar{
    flex: 3;
    width: 100%;
    @media(max-width: 700px){
      display: none;
    }
  }
`;
export const Main = styled.div`
  flex: 9;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .settingsTitle{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
    span{
      color: red;
      cursor: pointer;
      :first-child{
        font-size: 1.3rem;
      }
      :last-child{
        font-size: .8rem;
      }
    }
  }
  form{
    display: flex;
    flex-direction: column;
    .profilePic{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      label i{
        color: red;
        font-size: 1.4rem;
        margin-left: 10px;
      } 
      img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
   
    label{
      margin: 10px 0 ;
    }
    input{
      padding: 10px 5px;
      border: none;
      border-bottom: 1px solid;
      color: grey;
      outline: none;
    }
    button{
      margin-top: 20px;
      color: white;
      background-color: green;
      padding: 8px 25px; 
      border-radius: 8px;
      font-weight: 500;
      width: fit-content;
      display: flex;
      justify-content: center;
      margin: 30px auto;
      border: none;
      cursor: pointer;
    }
  }
`;