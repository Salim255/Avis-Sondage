import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOption } from "../features/survey/createSurveySlice";

const CreateSondageQuestionsAndOptions = () => {
  const { createOpinionId } = useParams();
  const [val, setVal] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, allOpinions } = useSelector((store) => store.opinions);
  const justCreatedSurvey = allOpinions.find(
    (opinin) => opinin.id === 1 * createOpinionId
  );

  const handleAdd = () => {
    const abc = [...val, []];

    setVal(abc);
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i);
    setVal(deleteVal);
  };

  const handlechange = (value, i) => {
    const inputdata = [...val];
    inputdata[i] = { text: value.target.value, image: "" };
    setVal(inputdata);
  };
  const handleSubmit = () => {
    dispatch(createOption({ PollId: createOpinionId, ...val[0] }));
  };

  return (
    <div className="SondagQuestionAndOptions">
      <div
        className="SondagQuestionAndOptions__container"
        onSubmit={() => handleSubmit}
      >
        <button onClick={() => handleAdd()}>Add Option</button>
        {val.map((data, i) => {
          return (
            <div key={i}>
              <input onChange={(e) => handlechange(e, i)} />

              <button onClick={() => handleDelete(i)}>x</button>
            </div>
          );
        })}
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
      <Link to="/sondage">Back to Sondage</Link>
    </div>
  );
};

export default CreateSondageQuestionsAndOptions;
