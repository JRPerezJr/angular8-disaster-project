/**
Copyright 2019 Juan Perez

//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at

//        http://www.apache.org/licenses/LICENSE-2.0

//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
*/

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
