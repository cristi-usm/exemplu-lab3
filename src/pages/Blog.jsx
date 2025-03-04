import { Header, Inbox, SideContainer } from "@components/common";
import { Searchbar } from "@components/Searchbar";
import { Articles } from "@/components/Articles/Articles";
import { Pagination } from "@components/Pagination";

function Blog() {
    return (
        <>
            <Header
                title="Blog & Article"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                size="lg"
            />
            <Searchbar />
            <SideContainer>
                <Articles />
            </SideContainer>
            <Pagination />
            <Inbox />
        </>
    );
}

export default Blog;
