import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { IngredientService } from 'src/app/shopping-list/ingredient.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(
    private recipe: RecipeService, 
    private ingredientService: IngredientService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      this.id = +param['id'];
      this.recipeDetail = this.recipe.getRecipe(this.id);
    });
  }

  addtoIngredient(ingredients: Ingredient[]){
    this.ingredientService.addIngredients(ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //or up one level navigation "../"
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
