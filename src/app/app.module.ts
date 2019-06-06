import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BagComponent } from './bag/bag.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { DescriptionComponent } from './description/description.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { FireComponent } from './fire/fire.component';
import { FloodComponent } from './flood/flood.component';
import { HomeComponent } from './home/home.component';
import { NuclearComponent } from './nuclear/nuclear.component';
import { TornadoComponent } from './tornado/tornado.component';

// <--Import these modules-->
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BagComponent,
    ChecklistComponent,
    DescriptionComponent,
    EarthquakeComponent,
    FireComponent,
    FloodComponent,
    HomeComponent,
    NuclearComponent,
    TornadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // <--Add these-->
    FormsModule,
    HttpClientModule
    // <--Add these-->
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
