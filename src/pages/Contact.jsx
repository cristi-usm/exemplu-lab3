import { CheckRecipes, Inbox } from "@components/common";
import { ContactForm } from "@components/ContactForm";

function Contact() {
    return (
        <div>
            <ContactForm />
            <Inbox />
            <CheckRecipes title="Check out the delicious recipe" />
        </div>
    );
}

export default Contact;
