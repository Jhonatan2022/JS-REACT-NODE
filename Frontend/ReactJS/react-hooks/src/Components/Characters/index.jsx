import {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { Search } from "../Search";
import { useCharacters } from "../../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const API_URL = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

function Characters() {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const characters = useCharacters(API_URL);

  const handleAddToFavorites = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleRemoveFromFavorites = (favorite) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  //   // setSearch(target.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  //
  // const filteredCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />

      {filteredCharacters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          {favorites.favorites.some((char) => char.id === character.id) ? (
            <button
              type="button"
              onClick={() => handleRemoveFromFavorites(character)}
            >
              Remove from favorites
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleAddToFavorites(character)}
            >
              Add to favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export { Characters };
