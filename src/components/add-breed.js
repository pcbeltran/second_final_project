import React from "react";
import useSaveBreed from "../hooks/use-save-breed";
import BreedForm from "./breed-form";
import "./add-breed.css";

function AddBreed(props) {
  const { user } = props;
  //const userId = props.user.uid;
  const [save, isSaving, formMessage] = useSaveBreed();

  const onBreedSumbit = async (title, rating, origin, size, weight) => {
    save({ title, rating, origin, size, weight }, user);
  };

  return (
    <div className="add-container">
      <h1>Add Breed</h1>
      <BreedForm onSubmit={onBreedSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBreed;
