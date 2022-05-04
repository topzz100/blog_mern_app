import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px 50px 20px; 
  @media(max-width: 700px){
    padding: 0 10px 20px;
    margin-top: 20px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  a{
    text-decoration: none;
    color: inherit;
  }
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
  } 
  .categories{
    margin-bottom: 15px;
    span{
      margin: 10px 5px;
      font-size: .8rem;
    }
  }
  h4{
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .time{
    font-size: .8rem;
  }
  p{
    font-size: .9rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  }
`;