import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppBrowserModule } from './app.browser.module';

@NgModule({
  imports: [
    ServerModule,
    AppBrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
