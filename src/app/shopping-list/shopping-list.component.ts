import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    new Ingridient('Leite condensado', 10),
    new Ingridient('Farinha de trigo', 1),
    new Ingridient('Queijo Muzarella', 1),
    new Ingridient('Presunto',2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngridientAdded(ingridient: Ingridient){
    this.ingridients.push(ingridient);
  }

}
