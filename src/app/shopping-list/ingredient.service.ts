import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class IngredientService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    selectedIngredient = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('Toyo', 5),
        new Ingredient('Suka', 12),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    deleteIngredient(ingredient: Ingredient){
        const filteredItem =  this.ingredients.filter(function(value, index, arr){
              return ingredient !== value;
          });
        this.ingredients = filteredItem;
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    clearIngredients(){
        this.ingredients = [];
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}