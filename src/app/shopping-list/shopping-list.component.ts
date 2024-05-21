import {Component, OnInit} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 1),
    new Ingredient('Tomatoes', 2),
    new Ingredient('Rice', 1)

]

  constructor() {

  }

  ngOnInit() {
  }
}
