import styles from "./Directions.module.css";
import { DirectionsImg } from "@assets/images";
import { CheckmarkParagraph } from "@components/common";

export function Directions() {
    return (
        <div className={styles.directions}>
            <h2 className={styles.title}>Directions</h2>
            <CheckmarkParagraph>
                <h3 className={styles.title}>1. Lorem ipsum dolor sit.</h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <img className={styles.image} src={DirectionsImg} alt="" />
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </CheckmarkParagraph>
            <CheckmarkParagraph>
                <h3 className={styles.title}>2. Lorem ipsum dolor sit.</h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </CheckmarkParagraph>
            <CheckmarkParagraph>
                <h3 className={styles.title}>3. Lorem ipsum dolor sit.</h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                </p>
            </CheckmarkParagraph>
        </div>
    );
}
