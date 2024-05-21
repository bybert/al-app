import {Component, OnInit} from '@angular/core'
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Chicken Biriyani', 'Spicy', 'https://www.unileverfoodsolutions' +
      '.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/authentic-chicken-biryani/main-header.jpg'),
    new Recipe ('Chicken Biriyani', 'Spicy', 'https://www.unileverfoodsolutions' +
      '.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/authentic-chicken-biryani/main-header.jpg'),
    new Recipe ('Chicken Biriyani', 'Spicy', 'https://www.unileverfoodsolutions' +
      '.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/authentic-chicken-biryani/main-header.jpg')
  ]
  constructor() {


  }
  ngOnInit() {

  }
}
