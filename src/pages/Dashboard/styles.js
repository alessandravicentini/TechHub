import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

background: var(--grey-4);

width: 100vw;
height: 70px;

position: sticky;
top: 0;

padding: 0px 20%;
border-bottom: 1px solid var(--grey-3);

> button{
  padding: 5px 15px;
  margin-bottom: 20px;
}

@media(max-width: 767px){
  padding: 0px 15px;

  >img{
    width: 40%;
    max-width: 145px;
  }
}
`

export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100vw;
height: 100px;

padding: 0px 20%;
border-bottom: 1px solid var(--grey-3);

> p{
  color: var(--grey-1);
  font-size: 12px;
}

@media(max-width: 767px){
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;

  height: 120px;

  padding: 0px 15px;

  > h2, p{
    width: 100%;
  }
}
`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 100vw;

padding: 0 20%;

@media(max-width: 767px){
  padding: 0px 15px;
}
`;


export const TechInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100%;

> button{
  width: 30px;

  margin-bottom: 15px;

  font-size: large;
}
`;

export const TechContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

width: 100%;
min-height: 20vh;
height: max-content;

padding: 15px;

background: var(--grey-3);

border-radius: 4px;

`
