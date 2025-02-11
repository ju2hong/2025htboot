import Aside from "./Aside";
import Section from "./Section";

function Main() {
  return (
    <div id="main" className="flex flex-row-reverse p-3 ">
      <Section />
      <Aside />
    </div>
  );
}
export default Main;
