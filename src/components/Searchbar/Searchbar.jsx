import { Button } from "@components/common";
import styles from "./Searchbar.module.css";

export function Searchbar() {
    return (
        <div className={styles.searchbar}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search article, news or recipe..."
            />
            <Button className={styles.button} text="Search" />
        </div>
    );
}
