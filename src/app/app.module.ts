import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandpageComponent } from './components/landpage/landpage.component';
import { LoginComponent } from './components/login/login.component';
import { CampaignShowcaseComponent } from './components/campaign-showcase/campaign-showcase.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    LoginComponent,
    CampaignShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
