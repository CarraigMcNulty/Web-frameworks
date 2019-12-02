import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeListComponent } from './home-list/home-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
