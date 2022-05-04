import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const Content = styled.div`
  .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 3.8rem;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .mini{
      font-size: 1.2rem;
      text-transform: capitalize;
    }
    .major{
      font-size: 6rem;
      text-transform: uppercase;
      font-weight: 500;
      
    }
  }
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-top: 120px;
  }
`;