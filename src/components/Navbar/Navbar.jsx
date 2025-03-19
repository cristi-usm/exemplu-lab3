import styles from "./Navbar.module.css";
import Foodieland from "@assets/Foodieland.svg";
import facebookLogo from "@assets/facebook.svg";
import instagramLogo from "@assets/instagram.svg";
import twitterLogo from "@assets/twitter.svg";
import { Link } from "@components/navigation/Link";

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img
                className={styles.logo}
                src={Foodieland}
                alt="Foodieland Logo"
            />
            <div className={styles.links}>
                <Link className={styles.link} to="/">
                    Home
                </Link>
                <Link className={styles.link} to="/recipe">
                    Recipes
                </Link>
                <Link className={styles.link} to="/blog">
                    Blog
                </Link>
                <Link className={styles.link} to="/contact">
                    Contact
                </Link>
            </div>
            <div className={styles.social}>
                <a href="#">
                    <img
                        className={styles.icon}
                        src={facebookLogo}
                        alt="Facebook link"
                    />
                </a>
                <a href="#">
                    <img
                        className={styles.icon}
                        src={instagramLogo}
                        alt="Instagram link"
                    />
                </a>
                <a href="#">
                    <img
                        className={styles.icon}
                        src={twitterLogo}
                        alt="Twitter link"
                    />
                </a>
            </div>
        </nav>
    );
}
