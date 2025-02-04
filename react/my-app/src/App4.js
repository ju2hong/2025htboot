// import * as E from "./4-props/Props";
// import * as E from "./4-props/Ex";
import * as E from "./4-props/Ex2";

function App() {
  return (
    <div>
      <E.Greeting isMorning={false} name="주이" />
      <E.Greeting isMorning={true} name="메롱" />
    </div>
  );
}
export default App;
