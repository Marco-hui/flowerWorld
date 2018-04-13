import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery'

@Component({
    selector: 'mpayorder',
    templateUrl: './mpayorder.component.html',
    styleUrls: ['./mpayorder.component.scss']
})
export class MpayorderComponent implements OnInit {

    arrgoods: Array = [];
    arr: Array = [];
    ids: string = '';

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    pay(id){
        this.http.post('qpay',{id:id}).then((res)=>{
            $('.qpaysuccess').fadeIn()
            $('.qpaysuccess').fadeOut()
            this.http.post('qpayorder',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
                this.arrgoods = res.data;
            })
        })
    }

    nopay(id){
        this.http.post('qnopay',{id:id}).then((res)=>{
            this.http.post('qpayorder',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
                this.arrgoods = res.data;
            })
        })
    }

    ngOnInit() {
        if(window.sessionStorage.getItem('xxtoken')){
            this.http.post('qpayorder',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
                this.arrgoods = res.data;
            })
        }else{
            this.router.navigate(['/login']);
        }
    }

}
