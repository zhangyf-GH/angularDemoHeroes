import { Component, OnInit } from '@angular/core';
import { HEROES } from "../mock-heroes";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectHero: Hero;

  onSelect(hero:Hero):void{
    this.selectHero=hero;
  }
  constructor() { }

  ngOnInit() {

  }


}
