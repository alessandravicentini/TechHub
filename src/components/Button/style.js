import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};

  color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
  font-family: "Roboto Mono", monospace;

  height: 48px;
  width: 100%;

  border-radius: 8px;
  border: 2px solid var(--black);

  margin-top: 16px;

  transition: 0.5s;

  :hover {
    border: 2px solid var(--orange);
  }
`;
