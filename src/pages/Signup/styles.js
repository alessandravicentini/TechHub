import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 370px;
`;

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100%;

> img{
  width: 40%;
  max-width: 100px;

  margin: 10px 0px 0px 5px;
}

> button{
  width: 20%;

  margin-bottom: 10px;
}

`

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px)
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  animation: ${appearFromLeft} 1s;

  form{
    padding: 20px 20px;

    width: 100%;

    background: var(--grey-3);

    text-align: center;

    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h1{
      margin-bottom: 20px;

      font-size: 16px;
    }

    p{
      color: var(--grey-1);
      font-size: 12px;
    }

    > div{
      margin-top: 16px;
    }

    button{
      width: 100%;
    }

  }
`;
