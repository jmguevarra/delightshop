import { Component, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  
  constructor(private ingredientService: IngredientService) {}
  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientChanged.subscribe((ingredient: Ingredient[])=>{
      this.ingredients = ingredient;
    });
  }

  selectedItem(item: Ingredient, ingredientTag){
    const allShopList =  document.querySelectorAll('.shopping-list .list-group-item');
    allShopList.forEach(function(tag){
      tag.classList.remove('active');
    });
    ingredientTag.classList.add('active');
    this.ingredientService.selectedIngredient.emit(item);
  }

}
