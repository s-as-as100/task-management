import React from "react";

type ButtonProps = {
  buttonLabel: string;
};

const Button: React.FC<ButtonProps> = ({ buttonLabel }) => {
  return (
    <div>
      <button>{buttonLabel}</button>
    </div>
  );
};

export default Button;
