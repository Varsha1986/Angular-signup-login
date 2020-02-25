import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SimpleServiceService } from './simple-service.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent }
  // { path: 'new', component: NewComponent },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
  	RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule

  ],
  providers: [ SimpleServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
