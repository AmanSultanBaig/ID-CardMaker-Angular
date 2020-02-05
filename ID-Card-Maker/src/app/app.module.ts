import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Include ReactiveFormsModule for creating form controls
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // import ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
