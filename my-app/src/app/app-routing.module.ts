import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ElModule } from 'element-angular'
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ChildTestComponent} from './child-test/child-test.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { from } from 'rxjs';




const routes: Routes = [
  { path: '', component:LoginComponent  },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent ,canActivate: [AuthGuard]},
  { path: 'childtest', component: ChildTestComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes,{enableTracing: false}),
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      
   ]
})
export class AppRoutingModule { }
