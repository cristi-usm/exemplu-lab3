import styles from "./Pagination.module.css";

export function Pagination() {
    return (
        <div className={styles.pagination}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>...</div>
            <div>)</div>
        </div>
    );
}
