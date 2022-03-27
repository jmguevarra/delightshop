import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { IngredientService } from 'src/app/shopping-list/ingredient.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {}

  addtoIngredient(ingredients: Ingredient[]){
    this.ingredientService.addIngredients(ingredients);
  }

}
