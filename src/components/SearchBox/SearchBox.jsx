// SearchBox.jsx
import React from "react";
import styles from "../SearchBox/SearchBox.module.css";

function SearchBox({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.searchBox}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
