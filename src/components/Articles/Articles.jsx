import styles from "./Articles.module.css";
import articles from "@data/articles";

export function Articles() {
    return (
        <div className={styles.articles}>
            {articles.map((article) => (
                <div key={article.id} className={styles.article}>
                    <img className={styles.img} src={article.image} alt="" />
                    <div className={styles.information}>
                        <h2 className={styles.title}>{article.title}</h2>
                        <p>{article.description}</p>
                        <div className={styles.meta}>
                            <img
                                className={styles.authorPhoto}
                                src={article.authorPhoto}
                                alt=""
                            />
                            <p className={styles.name}>{article.authorName}</p>
                            <span className={styles.divider}></span>
                            <p>{article.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
