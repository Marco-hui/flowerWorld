import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import * as $ from 'jquery'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'mcollect',
    templateUrl: './mcollect.component.html',
    styleUrls: ['./mcollect.component.scss']
})
export class McollectComponent implements OnInit {
    
    arrgoods: Array = [];    

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    cancelcollect(id){
        this.http.post('qnocollect',{id:id}).then((res)=>{
            this.http.get('qcollect',{userid:window.sessionStorage.getItem('userID')}).then((res)=>{
                this.arrgoods = res.data;
            })
        })
    }

    ngOnInit() {
        this.http.get('qcollect',{userid:window.sessionStorage.getItem('userID')}).then((res)=>{
            this.arrgoods = res.data;
        })
    }
}