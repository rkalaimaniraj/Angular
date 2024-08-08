import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

import { PricingComponent } from './pricing/pricing.component';

import { AboutAsComponent } from './about-as/about-as.component';
import { ColorComponent } from './color/color.component';
export const routes: Routes = [
  // Default home route
  { path: '', component: HomeComponent }, // AboutComponent route
  { path: 'feature', component: FeaturesComponent }, // AboutComponent route
  { path: 'pricing', component: PricingComponent }, // AboutComponent route
  { path: 'about', component: AboutAsComponent },
  { path: 'color', component: ColorComponent },
];
