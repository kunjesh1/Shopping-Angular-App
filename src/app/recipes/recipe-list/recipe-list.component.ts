import { Component, OnInit, Output } from '@angular/core';

import {Recipe}  from '../recipe.model'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


 @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[

    new Recipe('A test Recipe','This is simply a test','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('A test Recipe','This is simply a test','https://static01.nyt.com/images/2019/01/17/dining/mc-red-lentil-soup/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);


  }

}
