import React, { useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOption } from "../features/survey/createSurveySlice";
import { toast } from "react-toastify";

const CreateSondageQuestionsAndOptions = ({ toggleModal, opinonId }) => {
  //const { createOpinionId } = useParams();

  const [val, setVal] = useState([]);
  /*  const [val, setVal] = useState({
    text: "",
    image: "",
  }); */
  const dispatch = useDispatch();
  const { isLoading, allOpinions } = useSelector((store) => store.opinions);
  const justCreatedSurvey = allOpinions.find(
    (opinin) => opinin.id === 1 * opinonId
  );
  const [optionImage, setOptionImage] = useState("");
  const [text, setText] = useState("");

  const handleAdd = (e) => {
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
    let mge;
    const form = new FormData();

    if (value.target.id === "file") {
      setOptionImage("salim");
      console.log("photo", optionImage, "hhhhh1", value.target.files[0]);
      mge = value.target.files[0];
      form.append("uploadImage", value.target.files[0]);
      console.log("====================================");
      console.log("photo", form, "hhhhh2", value.target.files[0]);
      console.log("====================================");
    } else {
      setText(value.target.value);
      form.append("text", value.target.value);
    }

    // inputdata[i] = { text: text, uploadImage: mge };
    inputdata[i] = mge;
    console.log("====================================");
    console.log("Formdats", inputdata[i]);
    console.log("====================================");
    setVal(inputdata);
  };
  const handleSubmit = (e) => {
    if (val.length > 0) {
      val.map((option) => {
        const form = new FormData();
        form.append("PollId", opinonId);
        form.append("text", option.text);
        form.append("uploadImage", option.mge);
        console.log("====================================");
        console.log("From where I am", form);
        console.log("====================================");
        dispatch(createOption(form, "data"));
      });

      setVal([]);
      toggleModal();
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <>
      <div className="createOption ">
        <div
          onClick={(e) => handleAdd()}
          className="createOption__btn createOption__btn--add"
        >
          Rajouter Option
        </div>

        {/*  <div className="createOption__container">
          <label>Option : 1</label>
          <div>
            <input
              onChange={(e) => handlechange(e, indice)}
              className="createOption__container--input"
              placeholder="
                Votre option ..."
            />
          </div>
        </div> */}

        {val.map((data, i) => {
          return (
            <div key={i} className="createOption__container">
              <label className="createOption__label">Option :{i + 2}</label>
              <div className="createOption__flex">
                <input
                  onChange={(e) => handlechange(e, i)}
                  className="createOption__container--input createOption__flex--input"
                  placeholder="
                Votre option ..."
                />
                <input
                  onChange={(e) => handlechange(e, i)}
                  type="file"
                  accept="image/*"
                  id="file"
                  name="file" /* onChange={e =>chanangH(e)} */
                />
                <label htmlFor="file" className="form__fileLadel">
                  Photo
                </label>
                <div
                  onClick={() => handleDelete(i)}
                  className="createOption__flex--delete"
                >
                  x
                </div>
              </div>
            </div>
          );
        })}
        <div
          onClick={handleSubmit}
          className="createOption__btn createOption__btn--submitbtn"
        >
          Créer
        </div>
        <div
          className="createOption__btn createOption__btn--annuler"
          onClick={toggleModal}
        >
          Annuler
        </div>
      </div>

      {/*   <div className="SondagQuestionAndOptions modal">
      <div className="overlay"></div>
      <div className="modal">
        <div
          className="SondagQuestionAndOptions__container "
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
        <Link to="/sondage" className="close-modal" onClick={toggleModal}>
          Back to Sondage
        </Link>
      </div>
    </div> */}
    </>
  );
};

export default CreateSondageQuestionsAndOptions;
