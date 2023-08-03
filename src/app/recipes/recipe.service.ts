import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Bomba de Teresina', 'A famosa bomba de Teresina','https://res.cloudinary.com/caseiraapp/image/upload/v1605627440/yw6h23ktqikebss2mpmk.png'),
    new Recipe('Mousse de maracujá','Um doce difícil de recusar e fácil de amar pra sempre! ','https://static.itdg.com.br/images/1200-630/e1ceeccaac52a138e4ab2f9a125b533b/mousse-de-maracuja.jpg')
  ];

  getRecipes(){
    //return a copy of the array
    return this.recipes.slice();
  }

}
