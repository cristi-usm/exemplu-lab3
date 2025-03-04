import styles from "./Instagram.module.css";
import { InstagramIcon } from "@assets/icons";
import posts from "@data/posts";
import { Header, Button, InstagramPost } from "@components/common";

export function Instagram() {
    return (
        <div className={styles.container}>
            <Header
                title="Check out @foodieland on Instagram"
                text="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            perferendis hic architecto neque ex officiis expedita corrupti
            cumque veniam dicta!"
            />
            <div className={styles.posts}>
                {posts.map((post) => (
                    <InstagramPost key={post.id} {...post} />
                ))}
            </div>
            <Button
                className={styles.button}
                text="Visit Our Instagram"
                icon={InstagramIcon}
            />
        </div>
    );
}
