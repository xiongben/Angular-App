import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ChildTestComponent} from './child-test/child-test.component';
import { AuthGuard }  from './auth.guard';
import { from } from 'rxjs';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent ,canActivate: [AuthGuard]},
  { path: 'childtest', component: ChildTestComponent },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes,{enableTracing: false})
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      
   ]
})
export class AppRoutingModule { }
