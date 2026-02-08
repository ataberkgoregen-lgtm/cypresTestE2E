import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;
`;

const Card = styled.div`
  padding: 30px;
  background: white;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #4b52d6;
  }
`;

export default function Login() {
  const history = useHistory();

  function handleLogin() {
    history.push("/success");
  }

  return (
    <Wrapper>
      <Card>
        <Title>Login</Title>
        <Button onClick={handleLogin}>Giriş Yap</Button>
      </Card>
    </Wrapper>
  );
}
