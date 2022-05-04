import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null; //return false if no ID params
      this.initForm();
    });
  }

  private initForm(){
    let recipeName = '',
        recipeImagePath = '',
        recipeDesc = '';
    let recipeIngredients =  new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;

      if(recipe['ingredients']){
          for(let ingredient of recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'ingName'    :   new FormControl(ingredient.name, Validators.required),
                'ingAmount'  :   new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)] )
              })
            );
          }
      }

    }

    this.recipeForm = new FormGroup({
      'recipeName' :  new FormControl(recipeName, Validators.required),
      'recipeDesc': new FormControl(recipeDesc, Validators.required),
      'recipeImagePath'   : new FormControl(recipeImagePath, Validators.required),
      'recipeIngredients'  : recipeIngredients
    });

  }

  get ingredientsControl() {
    return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
  }

  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['recipeName'],
      this.recipeForm.value['recipeDesc'],
      this.recipeForm.value['recipeImagePath'],
      this.recipeForm.value['recipeIngredients']
    ); 
    // if same format of Model just put the Formvaluue

    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
      //this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    }else{
      //new recipe
      this.recipeService.addRecipe(newRecipe);
      //this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.recipeForm.reset();
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'ingName'    :   new FormControl(null, Validators.required),
        'ingAmount'  :   new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/))
      })
    );
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
