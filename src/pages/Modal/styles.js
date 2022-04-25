import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;

position: absolute;

width: 90%;
max-width: 370px;
height: 370px;

`;

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

background: var(--grey-2);

height: 50px;

padding: 0px 15px;

border-radius: 4px 4px 0px 0px;

> button{
    margin-bottom: 15px;
    
    width: 10%;

    background: transparent;
}
`

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

background: var(--grey-3);

height: 320px;

border-radius: 0px 0px 4px 4px;

> form{
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
`

export const Select = styled.div`
background: var(--grey-2);

border-radius: 4px;
border: 1px solid var(--grey-2);

padding: 1rem;

width: 100%;

display: flex;

transition: 0.4s;

cursor: pointer;

select {
  background: transparent;

  align-items: center;

  flex: 1;

  border: 0;

  color: var(--grey-1);
  font-size: 14px;
  
}

&:hover{
  border: 1px solid var(--grey-0);
}
`

const appearFromTop = keyframes`
from{
    opacity: 0;
    transform: translateY(-50px)
}

to{
    opacity: 1;
    transform: translateY(0px);
}
`;

const disappear = keyframes`
from{
    opacity: 1;
    transform: translateY(0px)
}

to{
    opacity: 0;
    transform: translateY(-50px)
}
`

export const AnimationContainer = styled.div`

animation: ${appearFromTop} 1s;

display: flex;
flex-direction: column;

position: absolute;

margin: 20% ;

width: 90%;
max-width: 370px;
height: 370px;
`

export const Disappear = styled.div`

animation: ${disappear} 1s;

`

