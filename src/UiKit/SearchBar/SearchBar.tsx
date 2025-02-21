import React from "react";
import styles from "./SearchBar.module.scss";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles["search-input"]}
      />
      <Search className={styles["search-icon"]} size={20} />
    </div>
  );
};

export default SearchBar;
