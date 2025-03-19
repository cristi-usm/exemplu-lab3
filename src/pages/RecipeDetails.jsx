import { CheckRecipes, Inbox, SideContainer } from "@components/common";
import { MainRecipe } from "@components/MainRecipe";
import { RecipeInstructions } from "@components/RecipeInstructions";
import { Directions } from "@/components/Directions";

function RecipeDetails() {
    return (
        <>
            <MainRecipe />
            <SideContainer>
                <RecipeInstructions />
            </SideContainer>
            <Directions />
            <Inbox />
            <CheckRecipes title="You may like these recipe too" />
        </>
    );
}

export default RecipeDetails;
