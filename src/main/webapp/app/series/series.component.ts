import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { Serie } from './serie';
import { SeriesListComponent } from './series.list.component';
import { SeriesService } from './series.service'

@Component({
    template: `
        <h1>Series list</h1>
        <series-list></series-list>
    `,
    directives: [SeriesListComponent],
    providers: [
        HTTP_PROVIDERS,
        SeriesService
    ]
})

export class SeriesComponent { };