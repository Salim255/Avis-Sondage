import React, { useEffect } from "react";
import FormRow from "./FormRow";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { editOption } from "../features/survey/createSurveySlice";
import { getAllOpinions } from "../features/survey/opinionSlice";

const ModfiyOption = ({ toggleModal, modal, id, handleChange }) => {
  const { image, option } = useSelector((store) => store.createdSurvey);
  const dispatch = useDispatch();
  console.log("====================================");
  console.log(option, "from nini");
  console.log("====================================");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !option) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    /*  if (image) {
      dispatch(editOption({ optionId: id, option: { option: option } }));
    } */

    dispatch(editOption({ optionId: id, option: { text: option } }));
    dispatch(getAllOpinions());
  };
  //useEffect(() =>{}, []);

  return (
    <>
      <div className="">
        <div className="overlay"></div>
        <div className="modal modal__content">
          <form className=" ">
            <FormRow
              type="text"
              name="option"
              value={option}
              handleChange={handleChange}
              labelText="Option"
            />

            <div className="btn-container">
              <button
                type="submit"
                className="modifyBtn"
                //disabled={isLoading}
                onClick={handleSubmit}
              >
                modifier
              </button>
            </div>
          </form>

          <button className="close-modal" onClick={toggleModal}>
            fermer
          </button>
        </div>
      </div>

      {/*  <FormRow
        type="text"
        name="option"
        value={option}
        handleChange={handleChange}
        labelText=""
      /> */}
      {/* <FormRow
          type="text"
          name="image"
          value={image}
          handleChange={handleChange}
          labelText="Titre Du sondage"
        /> */}

      {/* <div>
        <button
          type="submit"
          className="btn btn-blak submit-btn"
          //disabled={isLoading}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div> */}
    </>
  );
};

export default ModfiyOption;
