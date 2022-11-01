import "./App.scss";
import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllMagasinNames } from "./features/ListMagasin/magasinSlice";
import ModifySurvey from "./components/ModifySurvey";
import CreateOpinion from "./components/CreateOpinion";
import CreateSondageQuestionsAndOptions from "./components/CreateSondageQuestionsAndOptions";
import { AddSurvey } from "./components/AddSurvey";
import { ModifyDeleteSurvey } from "./components/ModifyDeleteSurvey";
import ModfiyOption from "./components/ModfiyOption";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMagasinNames());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="avis" element={<SuiviAvis />} />
          <Route path="avis/:userOpinionId" element={<AvisClient />} />
          <Route path="sondage" element={<Sondage />} />

          <Route path="sondage/get/:opinonId" element={<AddSurvey />} />
          <Route path="create" element={<AddSurvey />} />
          <Route
            path="sondage/questionAndOptions/:createOpinionId"
            element={<CreateSondageQuestionsAndOptions />}
          />
          <Route
            path="sondage/modify/:createOpinionId"
            element={<ModifySurvey />}
          />
          <Route path="pop" element={<PopUp />} />
          {/* <Route path="create" element={<CreateSurvey />} /> */}
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>

      {/* <AvisItem /> */}
    </>
  );
}

export default App;
