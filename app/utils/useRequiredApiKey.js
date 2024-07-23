import { useEffect } from "react";
//pour récuperer la clé api et la stocké dans le local storage
export const useRequiredApikey = () => {
  useEffect(() => {
    let cleanup = false;
    const localStorageApiKey = localStorage.getItem("omdbApiKey");

    if (!localStorageApiKey) {
      while (!localStorage.getItem("omdbApiKey")) {
        const apiKey = prompt("Quel est ton OMDB API KEY");
        if (apiKey) {
          localStorage.setItem("omdbApiKey", apiKey);
        }
        if (cleanup) {
          break;
        }
      }
    }
    return () => {
      cleanup = true;
    };
  }, []);
};
