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
        <Route index element={<Main />} className="body" />
        <Route path="/takeout" element={<Tackout />} className="body" />
        <Route path="/rekiosk" element={<ReKiosk />} className="body" />
      </Routes>
    </BrowserRouter>
    //   <div className="flex justify-center items-center">
    //    <div className="kiosk-container">
    //       <Kiosk />
    //     </div>
    //   <div className="kiosk-container">
    //     <ReKiosk />
    //   </div>
    //  <div className="containerbox">
    //     <Tackout />
    //   </div>
    //   <div className="containerbox flex justify-start items-center">
    //     <MenuCheck />
    //   </div>
    //    </div>
    //   <div className="mainContainerbox">
    //     <Main />
    //   </div>
  );
}
