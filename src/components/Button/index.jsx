import { Container } from "./style";

export const Button = ({ children }) => {
  return (
    <Container type="button">
      {children}
    </Container>
  );
};
