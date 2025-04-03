import ReKiosk from "./ex05-app/ReKiosk";
import Tackout from "./ex05-app/Tackout";
import MenuCheck from "./ex05-app/MenuCheck";
import Main from "./ex05-app/Main";
import "/src/display.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/takeout" element={<Tackout />} />
        <Route path="/rekiosk" element={<ReKiosk />} />
        <Route path="/menucheck" element={<MenuCheck />} />
      </Routes>
    </BrowserRouter>
  );
}
