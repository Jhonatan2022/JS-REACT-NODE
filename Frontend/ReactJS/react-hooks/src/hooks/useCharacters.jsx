import { useEffect, useState } from "react";

function useCharacters(url) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la peticion");
        }
        return response.json();
      })
      .then((data) => setCharacters(data.results));
  }, [url]);

  return characters;
}

export { useCharacters };
