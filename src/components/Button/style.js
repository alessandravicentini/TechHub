import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  background: ${(props) => (props.size ? "#212529" : "")};

  color: var(--grey-0);
  font-size: ${(props) => (props.size ? "11px" : "14px")};

  height: ${(props) => (props.size ? "32px" : "48px")};

  border-radius: ${(props) => (props.size ? "4px" : "8px")};
  border: 0;

  margin-top: 20px;

  transition: 0.5s;

  :hover {
    background: ${(props) => (props.greySchema ? "#343B41" : "#FF427F")};
    background: ${(props) => (props.size ? "#343B41" : "")};

    font-size: ${(props) => (props.size ? "" : "calc(105%)")};
  }
  
`;
