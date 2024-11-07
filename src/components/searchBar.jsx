function SearchBar() {
  return (
    <form className="searchbar sticky " role="search">
      <input
        className="bg-200 rounded-full text-950 placeholder:text-500 placeholder:font-semibold px-3 py-1 w-full outline-none focus:bg-300"
        name="search"
        placeholder="Search"
        type="search"
      />
    </form>
  );
}
export default SearchBar;
