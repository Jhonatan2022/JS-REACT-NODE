function Search({ search, handleSearch, searchInput }) {
  return (
    <div className="Search">
      <input
        type="search"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export { Search };