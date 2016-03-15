import { Component, OnInit } from 'angular2/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
    selector: '<series-list></series-list>',
    template: `
        <h1>Series list</h1>        
        <ul *ngIf="series" >
            <li *ngFor="#serie of series; #i=index">
                {{ serie.name }}
            </li>
        </ul>
    `
})

export class SeriesListComponent implements OnInit {
    constructor(private _seriesService: SeriesService){};
    
    public errorMessage: string;
    public series: Serie[];
    
    ngOnInit() {
        this.getSeries();        
    }    
    
    getSeries() {
        this._seriesService.getAllSeries().subscribe(
            series => this.series = series,
            error => this.errorMessage = <any>error
        );
    }
}