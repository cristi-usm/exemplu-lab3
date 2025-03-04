import styles from "./MoreRecipes.module.css";
import recipes from "@data/moreRecipes.json";
import { Recipe } from "@components/common";

export function MoreRecipes() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Try this delicious recipe to make your day
                </h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut
                </p>
            </div>
            <div className={styles.recipes}>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}
            </div>
        </>
    );
}
