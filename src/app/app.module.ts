import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Home } from './home-component/home-component.component';
import { AboutComponent } from './about/about.component';

import { Routes, RouterModule} from '@angular/router';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';
import { ConvertToDollarPipe } from './convert-to-dollar.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

import { HttpClientModule } from '@angular/common/Http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import {LoginModuleModule} from './login-module/login-module.module';
import { TestComponent } from './test/test.component';

const route: Routes = [
  {
    path: 'home', component: Home
  },
  {
    // path: 'about', component: AboutComponent
    path:'about', children:[
      {
        path:'test1', component: AboutComponent
      }
    ]
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'child', component: ChildComponent
  },
  {
    path: 'template-driven', component: TemplateDrivenComponent
  },
  {
    path: 'reactive-form', component: ReactiveFormComponent
  },
  {
    path: 'directive', component: DirectiveComponentComponent
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
    ConvertToDollarPipe,
    SearchFilterPipe,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    CustomDirectiveDirective,
    DirectiveComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
