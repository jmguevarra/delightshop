import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;
  
  constructor(private ingredientService: IngredientService) {}
  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    this.igChangeSub = this.ingredientService.ingredientChanged.subscribe({
      next: ( ingredients : Ingredient[] )=> {
          this.ingredients = ingredients;
      },
    });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
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
