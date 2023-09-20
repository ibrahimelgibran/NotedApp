import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <label htmlFor="search" id="search-bar" className="card flex items-center gap-3 text-text">
      <BiSearch size={20} />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search notes..."
        autoComplete="off"
        inputMode="search"
        className="flex-auto text-title"
      />
    </label>
  );
};

export default SearchBar;
