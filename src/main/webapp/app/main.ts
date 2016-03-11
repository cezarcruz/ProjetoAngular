import { AppComponent } from './app.component';
import { bootstrap } from 'angular2/platform/browser';
import { 
    ROUTER_PROVIDERS, 
    LocationStrategy, 
    HashLocationStrategy
} from 'angular2/router';

import {provide} from 'angular2/core';

import 'rxjs/Rx';

//used to put # in angular route param.
//TODO: change this to acept html5 url
bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);