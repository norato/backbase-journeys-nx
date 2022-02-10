import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateRegistry } from '@backbase/foundation-ang/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [...environment.mockProviders, TemplateRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
