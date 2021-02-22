import { Component, HostBinding, OnInit } from '@angular/core';

import { Routes,Router, RouterOutlet } from '@angular/router';

import {
  appAnimations
} from '../app-animations'

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.sass'],
  animations:[
    appAnimations.openClose,
    appAnimations.slideIn
  ]
})
export class OpenCloseComponent implements OnInit {

  isOpen = false;

  routes:Routes= this.router.config;

  childrenRoutes?:Routes = this.routes[
    (this.routes.findIndex(route=>route.path=='dashboard'))
  ].children;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log(this.childrenRoutes)
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
