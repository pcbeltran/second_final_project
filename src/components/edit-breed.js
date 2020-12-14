import React from "react";
import useBreed from "../hooks/use-breed";
import useSaveBreed from "../hooks/use-save-breed";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BreedForm from "./breed-form";
import "./edit-breed.css";

function EditBreed(props) {
  const { id } = props;
  //const breedId = props.id;
  //const userId = props.user.uid;

  const [breedData, isLoading, errorMessage] = useBreed(id);
  const [save, isSaving, formMessage] = useSaveBreed();

  const onBreedSubmit = async (title, origin, rating, size, weight) => {
    save({ title, origin, rating, size, weight }, id);
  };

  return (
    <div className="edit-container">
      <h2>Edit Breed</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {breedData && (
        <BreedForm
          initialState={breedData}
          onSubmit={onBreedSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditBreed;
