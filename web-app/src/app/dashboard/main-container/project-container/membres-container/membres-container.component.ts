import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-membres-container',
    templateUrl: './membres-container.component.html',
    styleUrls: ['./membres-container.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MembresContainerComponent implements OnInit {

    showAddMember = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleAddMember() {
        //TODO: get members from the API
        this.showAddMember = !this.showAddMember;
    }

    AddMember() {
        //TODO: associate member to project on the API
        this.showAddMember = !this.showAddMember;
    }
}
