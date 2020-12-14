import { useState, useEffect } from "react";
import { breedsCollection } from "../data/firebase";


function useBreed(userId, breedId) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [breedData, setBreedData] = useState(null);

  useEffect(() => {
    async function getBreed() {
      setIsLoading(true);

      try {
        const breedSnapshot = await breedsCollection
        .doc(userId)
        //.collection("breeds")
        //.doc(breedsId)
        .get();

        if (!breedSnapshot.exists) {
          throw new Error("No such breed exists!");
        }

        const data = breedSnapshot.data();
        setBreedData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }

      setIsLoading(false);
    }

    getBreed();
  }, [breedId]);

  return [breedData, isLoading, errorMessage];
}

export default useBreed;
