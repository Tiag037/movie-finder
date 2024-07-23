import { useEffect, useState } from "react";

// va servire a créé un laps de temps afin d'actualisé l'url seulement apres quelque seconde après avoir fini de taper sur le clavier

export function useDebounceValue(value, delayMs) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delayMs);
    return () => {
        clearTimeout(timeout)};
  }, [value, delayMs]);
  return debounceValue;
}
