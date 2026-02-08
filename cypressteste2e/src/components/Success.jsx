import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
`;
export default function Success() {
  return (
    <Wrapper>
      <h1>Başarılı giriş 🎉</h1>
    </Wrapper>
  );
}
