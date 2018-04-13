import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
    selector: 'mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('.footer ul li').eq(3).addClass('active')
    }

}