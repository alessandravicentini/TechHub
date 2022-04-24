import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;

  div {
    flex: 1;
    display: flex;
    justify-content: center;

    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }

  span {
    margin-bottom: 2rem;

    font-size: 1.8rem;

    flex-wrap: wrap;
  }
`;
