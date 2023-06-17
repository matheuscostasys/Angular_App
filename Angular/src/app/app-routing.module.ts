
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ShopComponent } from './shop/shop.component';

// TODO: #4. Define unique page titles
const routes: Routes = [
  { path: 'shop', component: ShopComponent, title: 'Our Shop – a11y in Angular' },
  { path: 'about', component: AboutComponent, title: 'Our Story - a11y in Angular' },
  { path: 'locate', component: LocationComponent, title: 'Find Us - a11y in Angular' },
  { path: '',   redirectTo: '/shop', pathMatch: 'full' },
  { path: '**', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
