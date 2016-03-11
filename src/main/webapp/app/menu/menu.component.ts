import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NgClass} from 'angular2/common';

@Component({
    selector: '<head-menu></head-menu>',
    template : `
                <nav class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">{{ 'Projeto' }}</a>
                        </div>                     
                        <div id="navbar" class="collapse navbar-collapse">
                            <ul class="nav navbar-nav">                                
                                <li><a [routerLink]="['HomeRouter']">Home</a></li>
                                <li><a [routerLink]="['SeriesRouter']">Series</a></li>
                            </ul>
                        </div>
                    </div>                       
                </nav>
                `,
   directives: [ROUTER_DIRECTIVES, MenuComponent, NgClass]
})

export class MenuComponent {
};