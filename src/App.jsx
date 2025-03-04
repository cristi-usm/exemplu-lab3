import { Router, Routes, Route } from "@components/navigation";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Homepage, Blog, Contact, RecipeDetails } from "@pages";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Homepage />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/recipe">
                    <RecipeDetails />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
