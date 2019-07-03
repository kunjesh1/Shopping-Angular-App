import { Component, OnInit } from '@angular/core';

import {Recipe}  from '../recipe.model'
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[

    new Recipe('A test Recipe','This is simply a test','https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){


  }

}
