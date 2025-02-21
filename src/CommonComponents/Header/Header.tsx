import SearchBar from "@/UiKit/SearchBar/SearchBar";
import { Bell, User } from "lucide-react";
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-title"]}>
        <h1>Tender Tasks</h1>
      </div>
      <div className={styles["header-right-content"]}>
        <SearchBar placeholder="Search a tender" />
        <Bell />
        <User />
      </div>
    </header>
  );
};

export default Header;
