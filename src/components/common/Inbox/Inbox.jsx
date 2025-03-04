import styles from "./Inbox.module.css";
import { Header, Button } from "@components/common";
import { InboxImg1, InboxImg2 } from "@assets/images";

export function Inbox() {
    return (
        <div className={styles.inbox}>
            <Header
                title="Deliciousness to your inbox"
                text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            />
            <div className={styles.form}>
                <input type="text" placeholder="Your email address..." />
                <Button text="Subscribe" />
            </div>
            <img
                className={`${styles.image} ${styles.left}`}
                src={InboxImg1}
                alt=""
            />
            <img
                className={`${styles.image} ${styles.right}`}
                src={InboxImg2}
                alt=""
            />
        </div>
    );
}
