import { useState, useEffect } from "react";
import { breedsCollection } from "../data/firebase";

function useAllBreeds(userId) {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBreeds(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your movie ratings. Please try again.");
      console.error(error);
    };
    
    const unsubscribe = breedsCollection
    //.doc(userId)
    //.collection("breeds")
    .orderBy("rating", "desc")
    .onSnapshot(onNext, onError);

    return unsubscribe;
  }, []);

  return [breeds, isLoading, errorMessage];
}

export default useAllBreeds;
