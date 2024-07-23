import { useEffect, useState } from "react";

export function useQueryState(queryKey, initialValue) {
  const [queryState, setQueryState] = useState(initialValue);
  useEffect(() => {

    /*
    permet que lorsque l'on actualise la page, l'url concerne les modification si quelque chose a était rentrer dans l'input
    */
    const newURL = new URL(window.location);
    const params = newURL.searchParams;
    if (params.get(queryKey)) {
      setQueryState(params.get(queryKey));
    }
  }, [queryKey, initialValue]);

  useEffect(() => {
    /*pour modifier l'url en meme temps que la barre de recherche, on va chercher a modifier les searchParams 
    
    querykey = ce qui est tapé dans l'input (represente le 'search' de l'url)
    initialValue = la valeur de l'url initial
    

    replaceState = vient remplacer le state sans rajouter une entré dans l'historique
    
    */
   
    const newURL = new URL(window.location);
    const params = newURL.searchParams;

    if (!queryState) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, queryState);
    }
    window.history.replaceState(null, "", newURL.toString());
  }, [queryKey, queryState]);

  return [queryState, setQueryState];
}
