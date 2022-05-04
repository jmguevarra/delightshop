import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes:Recipe[] = [
        new Recipe(
            'Chicken Adobo', 
            'Filipino dish cooked with soy souce.', 
            'https://www.knorr.com/content/dam/unilever/global/recipe_image/214/21436/214369-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
            [
                new Ingredient('Canola oil', 160),
                new Ingredient('Garlic', 50),
                new Ingredient('Chicken', 220),
                new Ingredient('Knorr chicken cubes', 80),
                new Ingredient('Soy Sauce', 145)
            ]
        ), 
        new Recipe(
            'Chicken Tinola',
            'This clear broth uses the rich flavors of chicken mixed with the strong and aromatic flavors of ginger to create a broth the relaxes and refreshes the soul.',
            'https://www.knorr.com/content/dam/unilever/global/recipe_image/110/11027/110276-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
            [
                new Ingredient('Canola oil', 160),
                new Ingredient('Garlic', 50),
                new Ingredient('Chicken', 220),
                new Ingredient('Knorr chicken cubes', 80),
                new Ingredient('Papaya', 70)
            ]
        ), 
        new Recipe(
            'Ginisang Monggo', 
            'This thick, hearty and healthy dish combines the savory and fresh flavors of monggo beans, mixed with the crispy textures of the pork crunch', 
            'https://www.knorr.com/content/dam/unilever/global/recipe_image/175/17548/175486-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg',
            [
                new Ingredient('Canola oil', 160),
                new Ingredient('Garlic', 50),
                new Ingredient('Chicken', 220),
                new Ingredient('Knorr chicken cubes', 80),
                new Ingredient('Monggo', 45)
            ]
        ), 
    ];

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(id: number){
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }   

    updateRecipe(index: number, updatedRecipe: Recipe){
        this.recipes[index] = updatedRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}