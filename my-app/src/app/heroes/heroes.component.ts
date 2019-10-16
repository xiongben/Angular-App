import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { from } from 'rxjs';

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
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: Hero):void {
    console.log(hero);
     this.selectedHero = hero;
  }

}
