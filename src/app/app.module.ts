import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserdataService } from './userdata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    
    BrowserModule
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
