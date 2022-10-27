import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuiviAvis from "./components/SuiviAvis";
import Sondage from "./components/Sondage";
import AvisClient from "./components/AvisClient";
import RetourSondage from "./components/RetourSondage";
import PopUp from "./components/PopUp";
import AvisItem from "./components/AvisItem";
import CreateSurvey from "./components/CreateSurvey";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import { Shared } from "react-redux";
import { getAllReviews } from "./features/review/reviewSlice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="avis" element={<SuiviAvis />} />
          <Route path="avis/:userOpinionId" element={<AvisClient />} />
          <Route path="sondage" element={<Sondage />} />
          <Route path="sondage/:onionId" element={<PopUp />} />
          <Route path="pop" element={<PopUp />} />
          {/* <Route path="create" element={<CreateSurvey />} /> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>

      {/* <AvisItem /> */}
    </>
  );
}

export default App;
