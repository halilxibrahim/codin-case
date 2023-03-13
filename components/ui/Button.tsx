import React from "react";
import { useThemeContext } from "../../lib/context/ThemeContext";
import styles from "./styles/Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 1 | 2 | 3 | 4 | 5;
}

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const { dark } = useThemeContext();

  switch (variant) {
    case 1:
      
      return (
        <button
          {...props}
          className={[styles.purpleButton, props.className].join(" ")}
        >
          {props.children}
        </button>
      );
    case 2:
      return (
        <button
          {...props}
          className={[
            styles.lightBtn,
            dark ? styles.darkLightBtn : "",
            props.className,
          ].join(" ")}
        >
          {props.children}
        </button>
      );
    case 3:

      return (
        <button
          {...props}
          className={[
            styles.darkBtn,
            dark ? styles.darkDarkBtn : "",
            props.className,
          ].join(" ")}
        >
          {props.children}
        </button>
      );
    case 4:
      return (
        <button
          {...props}
          className={[styles.orangeBtn, props.className].join(" ")}
        >
          {props.children}
        </button>
      );
    case 5:
    default:
      // button 6 in design spec
      return (
        <button
          {...props}
          className={[
            styles.longBtn,
            dark ? styles.darkLongBtn : "",
            props.className,
          ].join(" ")}
        >
          {props.children}
        </button>
      );
  }
};