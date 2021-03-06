import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ShowLogComponent } from './components/show-log/show-log.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FlyingPipe } from './flying.pipe';
import { from } from 'rxjs';
import { ElModule } from 'element-angular';
import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      DashboardComponent,
      ChildTestComponent,
      HighlightDirective,
      ForbiddenNameDirective,
      FlyingPipe,
      LoginComponent,
      MainpageComponent,
      ShowLogComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ElModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      httpInterceptorProviders,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
