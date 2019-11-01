import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { from, of, Observable,BehaviorSubject, Subject,ReplaySubject,AsyncSubject,interval } from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import { timeout } from 'q';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public xiongben: string = "XIONGBEN";
  heroes: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
    this.test();
    // this.test3();
    // this.test6();
  }
  onVoted(num: number){
    console.log(num);
    console.log("vote == father component");
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  test(): void {
    const aa = {"ss":22,"bb":55,"uu":[1,2,3.4]}
    const myobservable = of(aa).pipe(event => of({"xxxx": 77777}));
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    myobservable.subscribe(res => {
      console.log(res);
    });
  }
  test2(): void {
    function sequenceSubscriber(observer) {
      // console.log("===========")
      const seq = [1, 2, 3];
      let timeoutId;
     
      // Will run through an array of numbers, emitting one value
      // per second until it gets to the end of the array.
      function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doSequence(arr, ++idx);
          }
        }, 1000);
      }
     
      doSequence(seq, 0);
     
      // Unsubscribe should clear the timeout to stop execution
      return {unsubscribe() {
        clearTimeout(timeoutId);
      }};
    }
     
    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);
     
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }
  //observables 多播
  test3(): void {
    function sequenceSubscriber() {
      const seq = [1,2,3];
      const observers = [];
      let timeoutId;
      function doSequence(observer, arr, idx){
        // console.log(observers)
        return setTimeout(()=>{
           observer.next(arr[idx]);
           if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doSequence(observer, arr, ++idx);
          }
        },1000)
      }
      return (observer) => {
        // console.log(observers);
        observers.push(observer);
        if(observers.length === 1){
          console.log("=========")
          timeoutId = doSequence({
             next(val) {observers.forEach(obs => {
              // console.log(observers);
              obs.next(val);
             })},
             complete() {observers.forEach(obs => obs.complete())}
          },seq,0);
        }
        return {
          unsubscribe(){
            observers.splice(observers.indexOf(observer),1);
            if(observers.length === 0){
              clearTimeout(timeoutId);
            }
          }
        }
      }
    }

    const sequence = new Observable(sequenceSubscriber());

    sequence.subscribe({
      next(num){console.log(num)},
      complete(){console.log('Finished sequence');}
    });
    // After 1/2 second, subscribe again.
    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
    // setTimeout(() => {
    //   sequence.subscribe({
    //     next(num) { console.log('3nd subscribe: ' + num); },
    //     complete() { console.log('3nd sequence finished.'); }
    //   });
    // }, 1500);
  }

  test4() {
     var subject = new BehaviorSubject(0);
     subject.subscribe({
       next: (v) => console.log('observerA:' + v)
     });
     subject.next(1);
     subject.next(2);
     subject.subscribe({
      next: (v) => console.log('observerB:' + v)
     })
     subject.next(3);
  }
  test5(){
    var subject = new AsyncSubject();
    subject.subscribe({
      next: (v) => console.log('observerA:' + v)
    })
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.subscribe({
      next: (v) => console.log('observerB:' + v)
    })
    subject.next(5);
    subject.complete();
  }

  test6(){
    var arr1 = [10,20,30];
    // var res = from(arr1);
    var res = interval(1000);
    res.subscribe(x => console.log("from test:"+ x))
  }


}
