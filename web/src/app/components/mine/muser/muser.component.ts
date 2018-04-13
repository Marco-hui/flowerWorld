import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'muser',
    templateUrl: './muser.component.html',
    styleUrls: ['./muser.component.scss']
})
export class MuserComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    goback(){
        window.sessionStorage.removeItem('xxtoken')
        window.sessionStorage.removeItem('userID')
        this.router.navigate(['/mine']);
    }

    ngOnInit() {
        if(!window.sessionStorage.getItem('xxtoken')){
            this.router.navigate(['/login']);
        }
    }

}
