import styles from "./CheckmarkParagraph.module.css";
import { CheckmarkOutlineIcon, CheckmarkFilledIcon } from "@assets/icons";

export function CheckmarkParagraph({ checked, children }) {
    return (
        <p className={styles.checkmarkParagraph}>
            <img
                src={checked ? CheckmarkFilledIcon : CheckmarkOutlineIcon}
                alt="Checkmark"
                className={styles.checkmark}
            />
            <span className={checked ? styles.crossed : ""}>{children}</span>
        </p>
    );
}
