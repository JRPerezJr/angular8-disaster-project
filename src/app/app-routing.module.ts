import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ChecklistComponent } from "./checklist/checklist.component";
import { BagComponent } from "./bag/bag.component";

import { DescriptionComponent } from "./description/description.component";
import { WelcomeComponent } from "./welcome/welcome.component";

// New feature add by DevPerezJR
import { EarthquakeComponent } from "./earthquake/earthquake.component";
import { FireComponent } from "./fire/fire.component";
import { FloodComponent } from "./flood/flood.component";
import { NuclearComponent } from "./nuclear/nuclear.component";
import { TornadoComponent } from "./tornado/tornado.component";
// New feature add by DevPerezJR

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "public/home", component: HomeComponent },
  { path: "public/checklist", component: ChecklistComponent },
  { path: "public/description", component: DescriptionComponent },
  { path: "public/earthquake", component: EarthquakeComponent },
  { path: "public/fire", component: FireComponent },
  { path: "public/flood", component: FloodComponent },
  { path: "public/nuclear", component: NuclearComponent },
  { path: "public/tornado", component: TornadoComponent },
  { path: "public/earthquake", component: EarthquakeComponent },
  { path: "public/bag", component: BagComponent },
  { path: "", pathMatch: "full", redirectTo: "/welcome" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
