import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  slctItemAmount: number = 0;
  slctItemName: string = '';
  ingredients: Ingredient;
  @ViewChild('nameInput') nameInputEl: ElementRef;
  @ViewChild('amountInput') amountInputEl: ElementRef;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.selectedIngredient.subscribe((ingredient: Ingredient)=>{
      if(!ingredient){ return; }
      this.ingredients = ingredient;
      this.slctItemAmount = this.ingredients.amount;
      this.slctItemName = this.ingredients.name;
    });
  }


  onAddItem(){
    const elNameValue = this.nameInputEl.nativeElement.value;
    const elAmountValue = this.amountInputEl.nativeElement.value;
    const newIngredient = new Ingredient(elNameValue, elAmountValue);
    this.ingredientService.addIngredient(newIngredient);
    this.clearInputs();
  }

  onDelItem(){
    this.ingredientService.deleteIngredient(this.ingredients);
    this.clearInputs();
  }

  onClearItem(){ 
    this.ingredientService.clearIngredients();
    this.clearInputs();
  }

  clearInputs(){
    this.slctItemAmount = 0;
    this.slctItemName = '';
  }

}
