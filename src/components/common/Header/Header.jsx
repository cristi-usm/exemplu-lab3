import styles from "./Header.module.css";

export function Header(props) {
    const { title, text, size } = props;

    const style = {
        fontSize: size === "lg" ? "3rem" : "",
    };

    return (
        <div className={styles.header}>
            <h1 className={styles.title} style={style}>
                {title}
            </h1>
            <p className={styles.text}>{text}</p>
        </div>
    );
}
