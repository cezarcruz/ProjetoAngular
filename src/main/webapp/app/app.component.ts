import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>From app.component</h1>
                <nav>
                    <a [routerLink]="['HomeRouter']">Home</a>
                    <a [routerLink]="['SeriesRouter']">Series</a>
                </nav>
                <router-outlet></router-outlet>
              `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', name: 'HomeRouter', component: HomeComponent, useAsDefault: true},
    { path: '/series', name: 'SeriesRouter', component: SeriesComponent }
])

export class AppComponent {}