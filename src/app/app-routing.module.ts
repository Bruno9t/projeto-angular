import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {appRoutes} from './app-routes'


const routes = [];

for(let route in appRoutes){
  routes.push(appRoutes[route][0])
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
