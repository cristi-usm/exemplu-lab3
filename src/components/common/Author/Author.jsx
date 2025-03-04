import { UserDefaultImg } from "@assets/images";
import styles from "./Author.module.css";

const defaultProps = {
    picture: UserDefaultImg,
    date: "now",
    username: "John Doe",
};

export function Author(props) {
    const { picture, username, date } = { ...defaultProps, ...props };
    return (
        <div className={styles.block}>
            <img src={picture} alt="Author" className={styles.image} />
            <div className={styles.info}>
                <p className={styles.name}>{username}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}
