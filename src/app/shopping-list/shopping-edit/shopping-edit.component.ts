import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output, OnChanges, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges {
  slctItemAmount: number = 0;
  slctItemName: string = '';
  @ViewChild('nameInput') nameInputEl: ElementRef;
  @ViewChild('amountInput') amountInputEl: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() clearListItem = new EventEmitter<void>();
  @Output() delItem = new EventEmitter<Ingredient>();
  @Input() slctdShopItem: Ingredient;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(){
    if(!this.slctdShopItem){ return; }

    this.slctItemAmount = this.slctdShopItem.amount;
    this.slctItemName = this.slctdShopItem.name
  }

  onAddItem(){
    const elNameValue = this.nameInputEl.nativeElement.value;
    const elAmountValue = this.amountInputEl.nativeElement.value;
    const newIngredient = new Ingredient(elNameValue, elAmountValue);
    this.ingredientAdded.emit(newIngredient);
    this.clearInputs();
  }

  onDelItem(){
    this.delItem.emit(this.slctdShopItem);
    this.clearInputs();
  }

  onClearItem(){ 
    this.clearInputs();
    this.clearListItem.emit(); 
  }

  clearInputs(){
    this.slctItemAmount = 0;
    this.slctItemName = '';
  }

}
