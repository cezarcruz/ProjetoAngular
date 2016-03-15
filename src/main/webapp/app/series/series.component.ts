import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { SeriesFormComponent } from './series.form.component';

import { Serie } from './serie';
import { SeriesListComponent } from './series.list.component';
import { SeriesService } from './series.service'

@Component({
    template: `        
        <series-form></series-form>
        <series-list></series-list>
    `,
    directives: [SeriesListComponent, SeriesFormComponent],
    providers: [
        HTTP_PROVIDERS,
        SeriesService
    ]
})

export class SeriesComponent { };