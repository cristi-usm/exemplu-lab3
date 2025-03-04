import styles from "./NotFound.module.css";
import { Link } from "@components/navigation/Link";

function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 Not Found</h1>
            <p className={styles.text}>
                The page you are looking for does not exist.
            </p>
            <Link className={styles.link} to="/">
                Go back to the homepage
            </Link>
        </div>
    );
}

export default NotFound;
