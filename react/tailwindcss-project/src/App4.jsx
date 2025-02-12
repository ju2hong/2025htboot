import Kiosk from "./ex05-app/Kiosk";
import "/src/display.css";

export default function App() {
  return (
    <div className="body">
      <div className="kiosk-container flex justify-center items-center">
        <Kiosk />
      </div>
    </div>
  );
}
