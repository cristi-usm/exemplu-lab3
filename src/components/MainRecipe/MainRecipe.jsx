import styles from "./MainRecipe.module.css";
import { ManImg, RecipeImg } from "@assets/images";
import { TimerIcon, ForkKnifeIcon, PrintIcon, ShareIcon } from "@assets/icons";
import { Author } from "@components/common";

export function MainRecipe() {
    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Health Japanese Fried Rice</h1>
                    <div className={styles.info}>
                        <Author
                            date="15 March 2022"
                            name="Jon Smith"
                            picture={ManImg}
                        />
                        <span className={styles.divider}></span>
                        <div className={styles.icon}>
                            <img src={TimerIcon} alt="Timer" />
                            <div>
                                <p>
                                    <b>PREP TIME</b>
                                </p>
                                <p>15 Minutes</p>
                            </div>
                        </div>
                        <span className={styles.divider}></span>
                        <div className={styles.icon}>
                            <img src={TimerIcon} alt="Timer" />
                            <div>
                                <p>
                                    <b>COOK TIME</b>
                                </p>
                                <p>15 Minutes</p>
                            </div>
                        </div>
                        <span className={styles.divider}></span>
                        <div className={styles.icon}>
                            <img src={ForkKnifeIcon} alt="Type" />
                            <p>Chicken</p>
                        </div>
                    </div>
                </div>
                <div className={styles.actions}>
                    <div className={styles.action}>
                        <div>
                            <img src={PrintIcon} alt="Print" />
                        </div>
                        <p>PRINT</p>
                    </div>
                    <div className={styles.action}>
                        <div>
                            <img src={ShareIcon} alt="Share" />
                        </div>
                        <p>SHARE</p>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <img src={RecipeImg} alt="" />
                <div className={styles.nutrition}>
                    <div className={styles.nutritionInfo}>
                        <h3>Nutrition Information</h3>
                        <div className={styles.line}>
                            <p>Calories</p>
                            <p>219.9 kcal</p>
                        </div>
                        <div className={styles.separator}></div>

                        <div className={styles.line}>
                            <p>Total Fat</p>
                            <p>10.7g</p>
                        </div>
                        <div className={styles.separator}></div>

                        <div className={styles.line}>
                            <p>Protein</p>
                            <p>7.9g</p>
                        </div>
                        <div className={styles.separator}></div>

                        <div className={styles.line}>
                            <p>Carbohydrate</p>
                            <p>22.3g</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.line}>
                            <p>Cholesterol</p>
                            <p>34.7mg</p>
                        </div>
                    </div>
                    <p>
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </>
    );
}

export default MainRecipe;
