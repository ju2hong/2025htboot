import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: grey;
`;
const Title = styled.div`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

function StyledComponent3() {
  return (
    <div>
      <Wrapper>
        <Title>하이~</Title>
      </Wrapper>
    </div>
  );
}
export default StyledComponent3;
