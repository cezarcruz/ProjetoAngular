import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Serie } from './serie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeriesService {
    constructor(private http: Http) {}
    
    private _seriesUrl = 'series/list';
    
    public getAllSeries() {
        return this.http.get(this._seriesUrl)
                   .map(res => <Serie[]> res.json())
                   .catch(this.handleError);
    }
    
    public saveSerie(serie: Serie) {
        return this.http.post(this._seriesUrl, JSON.stringify(serie));                              
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}