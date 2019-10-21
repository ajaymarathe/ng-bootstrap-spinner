import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng-spinner',
    templateUrl: './ng-spinner.component.html',
    styleUrls: ['./ng-spinner.component.scss']
})
export class NgSpinnerComponent implements OnInit {

    @Input() type;
    @Input() size;
    @Input() color;

    constructor() { }

    ngOnInit() {

    }

}
