import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('Chicken Adobo', 'Filipino dish cooked with soy souce.', 'https://www.knorr.com/content/dam/unilever/global/recipe_image/214/21436/214369-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg'), 
    new Recipe('Chicken Tinola', 'This clear broth uses the rich flavors of chicken mixed with the strong and aromatic flavors of ginger to create a broth the relaxes and refreshes the soul.', 'https://www.knorr.com/content/dam/unilever/global/recipe_image/110/11027/110276-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg'), 
    new Recipe('Ginisang Monggo', 'This thick, hearty and healthy dish combines the savory and fresh flavors of monggo beans, mixed with the crispy textures of the pork crunch', 'https://www.knorr.com/content/dam/unilever/global/recipe_image/175/17548/175486-default.jpg/_jcr_content/renditions/cq5dam.web.500.330.jpeg'), 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
