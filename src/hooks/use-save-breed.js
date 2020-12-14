import { useState } from "react";
import { breedsCollection } from "../data/firebase";

function useSaveBreed() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (breedData, userId, breedId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (breedId === undefined) {
        await breedsCollection.doc(userId).collection("breeds").add(breedData);
      } else {
        await breedsCollection.doc(userId).collection("breeds").doc(breedId).set(breedData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this breed. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveBreed;
