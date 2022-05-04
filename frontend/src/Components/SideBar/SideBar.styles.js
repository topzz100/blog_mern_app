import styled from "styled-components";

export const Wrapper = styled.div`
  /* flex: 3; */
  width: 100%;
  background-color: #fdfbfb;
`;
export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .mediaNav{
    width: 100%;
    display: none;
    @media(max-width: 700px){
      display: block;
      margin-bottom: 5px;
    }
  }
  .title{
    font-size: 1rem;
    font-weight: 500;
    width: 80%;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    line-height: 1.7rem;
  }
  ul{
    list-style: none;
  }
  .about{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    img{
      width: 100%;
      object-fit: cover;
      margin-bottom: 30px;
      border-radius: 5px;
    }
    p{
      font-size: .9rem;
      padding: 5px;
    }
  }
  .cat{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    ul{
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 80px;
      align-content: center;
      
      li{
        text-transform: capitalize;
      }
    }
  }
  .follow{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        margin: 0 5px;
      }
    }
  }
`;