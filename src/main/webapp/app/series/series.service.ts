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
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}