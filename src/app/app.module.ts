import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ZeroConfigComponent } from './zero-config/zero-config.component';
import { WithOptionsComponent } from './with-options/with-options.component';
import { WithAjaxComponent } from './with-ajax/with-ajax.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigComponent,
    WithOptionsComponent,
    WithAjaxComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
