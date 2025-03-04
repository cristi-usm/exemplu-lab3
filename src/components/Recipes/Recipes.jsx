import styles from "./Recipes.module.css";
import { Ads } from "@assets/images";
import recipes from "@data/recipes.json";
import { Header, Recipe } from "@components/common";

export function Recipes() {
    return (
        <div className={styles.container}>
            <Header
                title="Simple and tasty recipes"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa, corporis ut rem accusamus fuga. Asperiores animi maxime vitae dolores!"
            />
            <div className={styles.recipes}>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} background={true} />
                ))}
                <img className={styles.ads} src={Ads} alt="ADS" />
            </div>
        </div>
    );
}
