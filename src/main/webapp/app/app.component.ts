import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'my-app',
    template: `
                <head-menu></head-menu>
                <div class="container">
                    <div class="starter-template">         
                        <router-outlet></router-outlet>
                    </div>
                </div>
              `,
    directives: [ROUTER_DIRECTIVES, MenuComponent]
})
@RouteConfig([
    { path: '/home', name: 'HomeRouter', component: HomeComponent, useAsDefault: true},
    { path: '/series', name: 'SeriesRouter', component: SeriesComponent }
])

export class AppComponent {}