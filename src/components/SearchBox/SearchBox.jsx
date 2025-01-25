import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
