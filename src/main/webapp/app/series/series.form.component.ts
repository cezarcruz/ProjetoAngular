import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Serie} from './serie';

@Component({
    selector: 'series-form',
    template: `
    <div class="container">
        <h1>Serie form</h1>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" [(ngModel)]="model.name" required ngControl="name">                
            </div>
            <div class="form-group">
                <label for="season">Season</label>
                <input type="text" class="form-control" [(ngModel)]="model.season" required>
            </div>
            <button type="submit" class="btn btn-default">Save</button>
        </form>
    </div>            
    `
})
export class SeriesFormComponent {
    public model: Serie = new Serie(0, "Supernatural", 10);
    onsubmit() {
        console.log('submitted');
    }
    
}