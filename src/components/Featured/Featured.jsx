import styles from "./Featured.module.css";
import { ForkKnifeIcon, RecipeIcon, TimerIcon,BadgeIcon ,PlayCircleIcon} from "@assets/icons";
import {BackedChickenImg,ManImg} from "@assets/images";
import { Author, Button, Badge } from "@components/common";

export function Featured() {
    return (
        <div className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.block}>
                <div className={styles.info}>
                    <div className={styles.infoHeader}>
                        <span className={styles.badge}>
                            <img src={RecipeIcon} alt="Recipe Icon" />
                            Hot Recipes
                        </span>
                        <img
                            className={styles.like}
                            src={BadgeIcon}
                            alt="None"
                        />
                    </div>
                    <h1 className={styles.title}>
                        Spicy delicious chicken wings
                    </h1>
                    <p className={styles.text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Beatae mollitia accusantium doloribus corrupti,
                        possimus magnam.
                    </p>
                    <div className={styles.badges}>
                        <Badge text="30 Minutes" icon={TimerIcon} background />
                        <Badge text="Chicken" icon={ForkKnifeIcon} background />
                    </div>
                    <div className={styles.bottom}>
                        <Author
                            date="15 March 2022"
                            name="Jon Smith"
                            picture={ManImg}
                        />
                        <Button text="View Recipes" icon={PlayCircleIcon} />
                    </div>
                </div>
                <img
                    className={styles.img}
                    src={BackedChickenImg}
                    alt="Photo of Baked Chicken Wings"
                />
            </div>
            <div className={styles.right}></div>
        </div>
    );
}
