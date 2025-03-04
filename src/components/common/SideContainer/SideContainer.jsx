import styles from "./SideContainer.module.css";
import { Ads } from "@assets/images/";
import recipes from "@data/smallRecipes.json";
import { SmallRecipeArticle } from "@components/SmallRecipeArticle";

export function SideContainer({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>{children}</div>
            <div className={styles.sideContainer}>
                <h2 className={styles.title}>Other Recipes</h2>

                {recipes.map((recipe) => (
                    <SmallRecipeArticle
                        key={recipe.id}
                        img={recipe.image}
                        title={recipe.title}
                    />
                ))}
                <img className={styles.image} src={Ads} alt="Ads" />
            </div>
        </div>
    );
}
