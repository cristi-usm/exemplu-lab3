import styles from "./Footer.module.css";
import Foodieland from "@assets/Foodieland.svg";
import facebookLogo from "@assets/facebook.svg";
import instagramLogo from "@assets/instagram.svg";
import twitterLogo from "@assets/twitter.svg";

export function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.logo}
                        src={Foodieland}
                        alt="Foodieland Logo"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
                </div>
                <nav>
                    <span>Recipes</span>
                    <span>Blog</span>
                    <span>Contact</span>
                    <span>About us</span>
                </nav>
            </div>

            <div className={styles.copy}>
                &copy;2025 Flowbase. Powered by&nbsp;
                <span className={styles.accent}>Webflow</span>
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
            </div>
        </>
    );
}

export default Footer;
