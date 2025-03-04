import styles from "./ContactInput.module.css";

export function ContactInput({ label, type = "text", placeholder, ...rest }) {
    return (
        <div className={styles.inputContainer}>
            {label && (
                <label className={styles.label} htmlFor={label}>
                    {label}
                </label>
            )}
            {type === "textarea" ? (
                <textarea
                    rows={10}
                    id={label}
                    placeholder={placeholder}
                    className={styles.input}
                    {...rest}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={label}
                    placeholder={placeholder}
                    className={styles.input}
                    {...rest}
                />
            )}
        </div>
    );
}
