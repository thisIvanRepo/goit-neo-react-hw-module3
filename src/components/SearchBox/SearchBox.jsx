import React from "react";
import style from "./SearchBox.module.css";

const SearchBox = ({ onInput }) => {
  return (
    <label className={style.searchInput}>
      Search for contacts by name
      <input
        className={`form-control ${style.searchInput}`}
        onChange={(event) => onInput(event.target.value)}
      />
    </label>
  );
};

export default SearchBox;
