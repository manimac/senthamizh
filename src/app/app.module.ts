import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';

import { Routes, RouterModule} from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';
import { ConvertToDollarPipe } from './convert-to-dollar.pipe';

const route: Routes = [
  {
    path: 'home', component: Home
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'child', component: ChildComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    ToUpperCasePipe,
    ConvertToDollarPipe
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
