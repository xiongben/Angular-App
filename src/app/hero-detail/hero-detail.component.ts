import { Component, OnInit, Input ,SimpleChanges} from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService }  from '../hero.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getHero();
  }
  //生命周期钩子
  ngOnChanges(changes: SimpleChanges) {
      let chng = changes.hero;
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`currentValue = ${cur}, previousValue = ${prev}`);
  }
  ngDoCheck() {
    // console.log(this.hero)
  }
  getHero():void{
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id)
    // .subscribe(hero => this.hero = hero);

    this.route.paramMap.subscribe(res => {
      const id = +res.get("id");
      this.heroService.getHero(id).subscribe(
        hero => this.hero = hero
      )
    })
    

    // const hero = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     console.log("========")
        
         
    //     return new Observable;
    //   })
    // )
  }
  goBack(): void {
    this.location.back();
  }
}
