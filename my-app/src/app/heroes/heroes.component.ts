import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { from } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero = {
    id: 1,
    name: "xiongben",
  };
  heros = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService
  ) { 

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero):void {
    console.log(hero);
     this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes)
    });
  }

}
