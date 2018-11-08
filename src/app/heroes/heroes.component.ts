import { Component, OnInit } from '@angular/core';
import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectHero: Hero;

  onSelect(hero:Hero):void{
    this.selectHero=hero;
  }

  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


}
