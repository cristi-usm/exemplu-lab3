import styles from "./SmallRecipeArticle.module.css";

export function SmallRecipeArticle({ img, title }) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={img} alt="" />
            <div>
                <h4 className={styles.title}>{title}</h4>
                <p>By Andreas Paula</p>
            </div>
        </div>
    );
}
