import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';

import { Routes, RouterModule} from '@angular/router';
import{ FormsModule} from '@angular/forms';

const route: Routes = [
  {
    path: 'home', component: Home
  },
  {
    path: 'about', component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
