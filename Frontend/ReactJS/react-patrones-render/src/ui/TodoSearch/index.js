import React, { useEffect } from "react";
import "./TodoSearch.css";

function TodoSearch({
  searchValue,
  setSearchValue,
  loading,
  params,
  setParams,
}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);

    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <input
      className="TodoSearch"
      placeholder="Search Todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
