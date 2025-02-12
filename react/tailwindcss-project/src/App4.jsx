import Kiosk from "./ex05-app/Kiosk";
import Tackout from "./ex05-app/Tackout";
import "/src/display.css";

export default function App() {
  return (
    <div className="body">
      <div className="flex justify-center items-center">
        {/* <div className="kiosk-container">
          <Kiosk />
        </div> */}
        <div className="takeout-container flex justify-start items-center">
          <Tackout />
        </div>
      </div>
    </div>
  );
}
