import styles from "./Navbar.module.css";
import Foodieland from "@assets/Foodieland.svg";
import facebookLogo from "@assets/facebook.svg";
import instagramLogo from "@assets/instagram.svg";
import twitterLogo from "@assets/twitter.svg";

export function Navbar({ navigate }) {
    return (
        <nav className={styles.navbar}>
            <img
                className={styles.logo}
                src={Foodieland}
                alt="Foodieland Logo"
            />
            <div className={styles.links}>
                <button className={styles.link} onClick={() => navigate("home")}>
                    Home
                </button>
                <button className={styles.link} onClick={() => navigate("recipe")}>
                    Recipes
                </button>
                <button className={styles.link} onClick={() => navigate("blog")}>
                    Blog
                </button>
                <button className={styles.link} onClick={() => navigate("contact")}>
                    Contact
                </button>
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
