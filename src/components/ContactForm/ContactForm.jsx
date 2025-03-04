import styles from "./ContactForm.module.css";
import { ContactUsImg } from "@assets/images";
import { Button, ContactInput } from "@components/common";

export function ContactForm() {
    return (
        <>
            <h1 className={styles.header}>Contact Us</h1>
            <div className={styles.contactForm}>
                <img className={styles.image} src={ContactUsImg} alt="" />
                <form
                    className={styles.form}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <ContactInput
                        placeholder="Enter your name..."
                        label="name"
                    />
                    <ContactInput
                        placeholder="Your email addess..."
                        label="email address"
                    />
                    <ContactInput
                        placeholder="Enter subject..."
                        label="subject"
                    />
                    <ContactInput
                        placeholder="Advertising"
                        label="enquiry type"
                    />
                    <ContactInput
                        placeholder="Enter your message..."
                        label="message"
                        type="textarea"
                    />
                    <div className={styles.buttonContainer}>
                        <Button text="Submit" type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}
