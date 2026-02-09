import styled from "styled-components";

const Wrap = styled.div`
    display:flex,
    justify-content:center,
    text-align:center,
    align-item:center,
    flex-direction:column,
    height:100vh,
`;

export default function Success() {
  return (
    <Wrap>
      <h1>Hoşgelidiniz</h1>
      <p>Basari ile giris yaptiniz!</p>
    </Wrap>
  );
}
