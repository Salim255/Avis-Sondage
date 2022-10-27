import React, { useState } from "react";
import ProgrammedSondage from "./ProgrammedSondage";
import RunningSondage from "./RunningSondage";
import FinishedSondage from "./FinishedSondage";
export default function SondageCard({ allOpinions }) {
  const [programmedSondage, setProgrammedSondage] = useState(true);
  const [activeSondage, setActiveSondage] = useState(true);
  const [finishedSondage, setFinishedSondage] = useState(true);

  if (allOpinions) {
  }

  return (
    <div className="right__card">
      <div className="scroll">
        {allOpinions.map((opinion) => {
          return <RunningSondage key={opinion.id} opinion={opinion} />;
        })}
        <ProgrammedSondage />

        <FinishedSondage />
      </div>
    </div>
  );
}
