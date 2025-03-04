import styles from "./Button.module.css";

export function Button({
    text = "",
    icon = null,
    backgroundColor = "black",
    textColor = "white",
    className = "",
    style: userStyle = {},
    ...rest
}) {
    const computedStyles = {
        ...userStyle,
        backgroundColor,
        color: textColor,
    };

    return (
        <button
            className={`${styles.button} ${className}`}
            style={computedStyles}
            {...rest}
        >
            {text}
            {icon && <img src={icon} alt="Button icon" />}
        </button>
    );
}
