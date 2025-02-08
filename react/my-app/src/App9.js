// import * as E from "./9-conditional-render/ConditionalRender";
import * as E from "./9-conditional-render/Ex";

function App() {
  return (
    <div>
      {/* <E.Ex1 user={{ name: "김철수", email: "chulsoo@example.com" }} /> */}
      <E.Ex1 user={null} />
      {/* <E.Ex2 count={0} /> */}
      {/* <E.Ex3 isPremium={false} /> */}
    </div>
  );
}
export default App;
