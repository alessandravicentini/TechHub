import styled from 'styled-components'


export const Card = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100%;
height: 50px;

margin: 10px 0;
padding: 0 15px;

border-radius: 4px;

background: var(--grey-4);

transition: 0.5s;

cursor: pointer;

> p{
  width: 50%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

> span{
  font-size: 12px;
  color: var(--grey-1)
}

&:hover{
  background: var(--grey-2);
}
`
