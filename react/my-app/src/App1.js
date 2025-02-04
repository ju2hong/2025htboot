// default 그외
// import * as E from "./1-element/Element";
import * as N from "./1-element/Ex";
// *는 모든것을 E로 가져왔다 생각하면 편함.

function App() {
  // 이 방식은 JXS로 렌더링 하지 않고
  // react 컴퍼넌트 자체 또는 JSX 요소로 작성된 변수를 반환하는 경우.
  // return E.E6;
  // return N.NameCard;
  // 이방식은 React의 함수형(클래스형) 컴퍼넌트를
  // JXS 문법으로 호출하여 반환하는 경우.
  // return <E.Hello name="홍길동" />;
  // return <E.ConfirmDialog />;
  // return <N.Greeting name="홍길동" age="25" />;
  return <N.ProductList />;
}

export default App;
