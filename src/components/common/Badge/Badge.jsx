import styles from "./Badge.module.css";

export function Badge(props) {
    const { text = "Default Text", icon, background = false } = props;

    const classes = `${styles.badge} ${background ? styles.background : ""}`;

    return (
        <span className={classes}>
            {icon && <img src={icon} alt="Icon" />}
            {text}
        </span>
    );
}
