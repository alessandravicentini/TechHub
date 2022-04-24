import styled from "styled-components";

export const Container = styled.div`
  text-align: left;

  span {
    color: var(--negative);
  }

  
  > div{
    font-size: 12px;

    margin-bottom: 5px;
  }
  
`;

export const InputContainer = styled.div`
  background: var(--grey-2);

  border-radius: 4px;
  border: 1px solid var(--grey-2);

  padding: 1rem;

  width: 100%;

  display: flex;

  transition: 0.4s;

  input {
    background: transparent;

    align-items: center;

    flex: 1;

    border: 0;

    color: var(--grey-0);
    font-size: 14px;

    &::placeholder {
      color: var(--grey-1);
    }
  }

  &:hover{
    border: 1px solid var(--grey-0)
  }

  svg:hover{
    cursor: pointer;
  }

`;