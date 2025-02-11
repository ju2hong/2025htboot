import styled from "styled-components";

const Button = styled.button`
  color: grey;
  background-color: yellow;
  border: 2px solid green;
`;

// Button 에 스타일을 추가할 수 있다.
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function StyledComponent2() {
  return (
    <div>
      <Button>Nomal</Button>
      <RoundedButton>Rounded</RoundedButton>
    </div>
  );
}
export default StyledComponent2;
