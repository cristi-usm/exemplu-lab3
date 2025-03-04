import styles from "./RecipeInstructions.module.css";
import { CheckmarkParagraph } from "@components/common";

export function RecipeInstructions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Instructions</h2>
            <div className={styles.instructions}>
                <h3>For main dish</h3>
                <CheckmarkParagraph checked>
                    Lorem ipsum dolor sit
                </CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
            </div>
            <div className={styles.instructions}>
                <h3>For the sauce</h3>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
                <CheckmarkParagraph>Lorem ipsum dolor sit</CheckmarkParagraph>
            </div>
        </div>
    );
}
