import { Component, OnInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit{
  constructor() {
    
   }
   

  ngOnInit(): void {

    //Data Binding Working in View Component
    // this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
    //   this.slctRecipe = recipe;
    // });

    //Data Binding not working in View Component
    // this.recipeService.selectedRecipe.subscribe(function(recipe: Recipe){
    //  this.slctRecipe = recipe;
    // });
  }

}
