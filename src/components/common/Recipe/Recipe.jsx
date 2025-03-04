import styles from "./Recipe.module.css";
import {
    TimerIcon,
    ForkKnifeIcon,
    HeartFilledIcon,
    HeartIcon,
} from "@assets/icons";
import { Badge } from "@components/common";

export function Recipe(recipe) {
    const calculatedStyle = {
        background: recipe?.background
            ? "linear-gradient(#fff, var(--light_blue))"
            : "",
    };

    return (
        <div
            key={recipe.id}
            style={{ ...calculatedStyle, order: recipe.id }}
            className={styles.recipe}
        >
            <img
                src={recipe.liked ? HeartFilledIcon : HeartIcon}
                alt="Like Button"
                className={styles.like}
            />
            <img
                className={styles.img}
                src={`${recipe.image}`}
                alt={recipe.title}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{recipe.title}</h3>
                <div className={styles.badges}>
                    <Badge text="30 Minutes" icon={TimerIcon} />
                    <Badge text={recipe.type} icon={ForkKnifeIcon} />
                </div>
            </div>
        </div>
    );
}
