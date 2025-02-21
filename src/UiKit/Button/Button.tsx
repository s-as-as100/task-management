import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  buttonLabel: string;
};

const Button: React.FC<ButtonProps> = ({ buttonLabel }) => {
  return (
    <div>
      <button className={styles["button"]}>{buttonLabel}</button>
    </div>
  );
};

export default Button;
