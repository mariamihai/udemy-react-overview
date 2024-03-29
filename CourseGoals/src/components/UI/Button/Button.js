import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
