import styles from "./CheckRecipes.module.css";
import recipesData from "@data/moreRecipes";
import { Recipe } from "@components/common";

const recipes = recipesData.slice(0, 4);

export function CheckRecipes({ title }) {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.recipes}>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
            </div>
        </>
    );
}
