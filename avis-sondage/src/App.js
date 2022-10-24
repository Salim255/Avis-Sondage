import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuiviAvis from "./components/SuiviAvis";
import Sondage from "./components/Sondage";
import AvisClient from "./components/AvisClient";
import RetourSondage from "./components/RetourSondage";
import PopUp from "./components/PopUp";
import AvisItem from "./components/AvisItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Login</div>} />
          <Route path="avis" element={<SuiviAvis />} />
          <Route path="sondage" element={<Sondage />} />
          <Route path="pop" element={<PopUp />} />
        </Routes>
      </BrowserRouter>

      {/* <AvisItem /> */}
    </>
  );
}

export default App;
