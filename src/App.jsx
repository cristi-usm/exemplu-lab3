import { useNavigation } from "@hooks/useNavigation";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Homepage, Blog, Contact, RecipeDetails } from "@pages";

const PAGES = ["home", "blog", "contact", "recipe"];

function App() {
    const { currentPage, navigate } = useNavigation(PAGES);

    let page;
    if (currentPage === "home") {
        page = <Homepage />;
    } else if (currentPage === "blog") {
        page = <Blog />;
    } else if (currentPage === "contact") {
        page = <Contact />;
    } else if (currentPage === "recipe") {
        page = <RecipeDetails />;
    }

    return (
        <>
            <Navbar navigate={navigate} />
            {page}
            <Footer />
        </>
    );
}

export default App;
