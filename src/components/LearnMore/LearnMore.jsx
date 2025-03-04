import styles from "./LearnMore.module.css";
import { ChefImg } from "@assets/images";
import { Button } from "@components/common";

export function LearnMore() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    Everyone can be a chef in their own kitchen
                </h1>
                <p className={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, veritatis odit? Accusamus, necessitatibus
                    repellendus nihil culpa facere hic blanditiis fugiat, magni
                    quidem, temporibus minima maiores.
                </p>
                <Button className={styles.button} text="Learn More" />
            </div>
            <img className={styles.img} src={ChefImg} alt="Chef Image" />
        </div>
    );
}
