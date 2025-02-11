// styled-components 모듈 사용 : JSX-html문법, CS는 css 문법을 그대로 따름
import styled from "styled-components";
// 모듈 설치
// npm i styled-components

const Button = styled.button`
  /* css 문법 사용 */
  color: blue;
  background-color: lightblue;
  background-color: ${(props) => (props.dark ? "black" : "lightblue")};
  border: 1px solid skyblue;
  border-radius: 7px;
  width: 150px;
  height: 75px;
`;

function StyledComponent1() {
  return (
    <div>
      <Button>Nomal</Button> <br />
      <Button dark="dark">Dark</Button>
    </div>
  );
}
export default StyledComponent1;
