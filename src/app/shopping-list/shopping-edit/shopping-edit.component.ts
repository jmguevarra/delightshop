import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputEl: ElementRef;
  @ViewChild('amountInput') amountInputEl: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {}

  onAddItem(){
    const elNameValue = this.nameInputEl.nativeElement.value;
    const elAmountValue = this.amountInputEl.nativeElement.value;
    const newIngredient = new Ingredient(elNameValue, elAmountValue);
    this.ingredientAdded.emit(newIngredient);
  }

  onDelItem(){

  }

  onClearItem(){

  }

}
