import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

/**
 * HeroDetailComponent 获取hero
 * 由列表HeroesComponent传入hero
 * 改为获取HeroesComponent传入的id，然后自己调用方法获取hero.
 */
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    const id=+this.route.snapshot.paramMap.get('id');
    //JavaScript 的 (+) 操作符会把字符串转换成数字，英雄的 id 就是数字类型。
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(): void{
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }


  goBack():void{
    this.location.back();
  }
}
