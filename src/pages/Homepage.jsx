import { Featured } from "@components/Featured";
import { Categories } from "@components/Categories";
import { Recipes } from "@components/Recipes";
import { LearnMore } from "@components/LearnMore";
import { Instagram } from "@/components/Instagram";
import { MoreRecipes } from "@/components/MoreRecipes/MoreRecipes";
import { Inbox } from "@components/common";

function Homepage() {
    return (
        <>
            <Featured />
            <Categories />
            <Recipes />
            <LearnMore />
            <Instagram />
            <MoreRecipes />
            <Inbox />
        </>
    );
}

export default Homepage;
