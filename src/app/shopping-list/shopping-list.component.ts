import { Component, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Toyo', 5),
    new Ingredient('Suka', 12),
    new Ingredient('Chicken', 160),
    new Ingredient('Papaya', 50),
  ];

  constructor() {}
  ngOnInit(): void { }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  clearShopList(){ this.ingredients = []; }

  selectedItem(item: Ingredient, ingredientTag){
    const allShopList =  document.querySelectorAll('.shopping-list .list-group-item');
    allShopList.forEach(function(tag){
      tag.classList.remove('active');
    });
    ingredientTag.classList.add('active');
    this.selectedIngredient = item;
  }

  delListItem(itemToDel: Ingredient){
    const filteredItem =  this.ingredients.filter(function(value, index, arr){
        return itemToDel !== value;
    });
    this.ingredients = filteredItem;
  }

}
