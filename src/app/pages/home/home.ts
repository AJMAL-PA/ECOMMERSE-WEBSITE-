import { Component } from '@angular/core';
import { Homedes } from '../../ui/homedes/homedes';
import { Cards } from '../../ui/cards/cards';

@Component({
  selector: 'app-home',
  imports: [Homedes,Cards],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
