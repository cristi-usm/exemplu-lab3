import styles from "./Categories.module.css";
import categories from "@data/categories.json";
import { Button } from "@components/common";

export function Categories() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Categories</h1>
                <Button
                    text="View All Categories"
                    textColor="black"
                    backgroundColor="var(--light_blue)"
                />
            </div>
            <ul className={styles.categories}>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        className={styles.category}
                        style={{
                            background: `linear-gradient( white, ${category.backgroundColor})`,
                        }}
                    >
                        <img
                            className={styles.img}
                            src={category.image}
                            alt={category.name}
                        />
                        <span className={styles.name}>{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
