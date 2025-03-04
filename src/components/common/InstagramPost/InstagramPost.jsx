import styles from "./InstagramPost.module.css";
import {
    InstagramProfileImg,
    InstagramCheckmarkImg,
    ProfileImg,
} from "@assets/images";
import {
    LikeIcon,
    MessangerIcon,
    SaveIcon,
    PaginationIcon,
    CommentIcon,
} from "@assets/icons";

export function InstagramPost(post) {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.profile}>
                    <img
                        className={styles.profileImg}
                        src={InstagramProfileImg}
                        alt="Instagram Profile Image"
                    />
                    <div className={styles.profileInfo}>
                        <div className={styles.name}>
                            <h4>Foodieland.</h4>
                            <img
                                className={styles.checkmark}
                                src={InstagramCheckmarkImg}
                                alt="Checmark"
                            />
                        </div>
                        <p>Tokyo, Japan</p>
                    </div>
                </div>
                <span className={styles.points}>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                </span>
            </div>
            <div className={styles.imageContainer}>
                <span className={styles.indicator}>1/3</span>
                <img
                    src={post.image}
                    alt="Instagram Post"
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.actions}>
                    <div className={styles.left}>
                        <img
                            className={styles.icon}
                            src={LikeIcon}
                            alt="Like"
                        />
                        <img
                            className={styles.icon}
                            src={CommentIcon}
                            alt="Comment"
                        />
                        <img
                            className={styles.icon}
                            src={MessangerIcon}
                            alt="Messanger"
                        />
                    </div>
                    <div className={styles.center}>
                        <img src={PaginationIcon} alt="Pagination" />
                    </div>
                    <div className={styles.right}>
                        <img src={SaveIcon} alt="Save" />
                    </div>
                </div>
                <div className={styles.liked}>
                    <img src={ProfileImg} />
                    <p>
                        Liked by <strong>craig_love</strong> and
                        <strong> 44,686</strong>
                    </p>
                </div>
                <p className={styles.description}>
                    <strong>Foodieland.</strong> {post.description}
                </p>
                <p className={styles.date}>September 19</p>
            </div>
        </div>
    );
}
