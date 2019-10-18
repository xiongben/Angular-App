import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
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
  value: string;
  testvalue: string;
  selectedHero: Hero;
  constructor(
    private heroService: HeroService
  ) { 

  }

  ngOnInit() {
    console.log("init===")
    this.getHeroes();
  }
  
  // ngAfterViewInit() {

  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes)
    });
  }

  onkey(v): void {
    this.value += v + ' | ';
  }
  
  selectHero(hero): void {
    this.selectedHero = hero;
  }
}
