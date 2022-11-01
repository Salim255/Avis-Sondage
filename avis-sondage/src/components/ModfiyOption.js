import React from "react";
import FormRow from "./FormRow";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editOption } from "../features/survey/createSurveySlice";
import { getAllOpinions } from "../features/survey/opinionSlice";

const ModfiyOption = ({ toggleModal, modal, id, handleChange }) => {
  const { image, option } = useSelector((store) => store.createdSurvey);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log("hellosubmit", id, option);
    e.preventDefault();
    if (!id || !option) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    /*  if (image) {
      dispatch(editOption({ optionId: id, option: { option: option } }));
    } */
    console.log("hellosubmi222t", id, option);
    dispatch(editOption({ optionId: id, option: { text: option } }));
    dispatch(getAllOpinions());
  };
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal__content">
        <form className="form " /* onSubmit={onSubmit} */>
          <div className="form__center"></div>
        </form>
        <h2>Hello Modl</h2>
        <FormRow
          type="text"
          name="option"
          value={option}
          handleChange={handleChange}
          labelText="Titre Du sondage"
        />
        {/* <FormRow
          type="text"
          name="image"
          value={image}
          handleChange={handleChange}
          labelText="Titre Du sondage"
        /> */}
        <button className="close-modal" onClick={toggleModal}>
          close
        </button>
        <div className="btn-container">
          <div>
            <button
              type="submit"
              className="btn btn-blak submit-btn"
              //disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModfiyOption;
