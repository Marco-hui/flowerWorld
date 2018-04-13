import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';

@Component({
    selector: 'maddress',
    templateUrl: './maddress.component.html',
    styleUrls: ['./maddress.component.scss']
})
export class MaddressComponent implements OnInit {
    
    arraddress: Array = [];

    deladdress(obj){
        console.log(obj.consigName)
        this.http.post('qdeladdress',{id:window.sessionStorage.getItem('userID'),name:obj.consigName}).then((res)=>{
            this.http.post('qaddress',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
                this.arraddress = res.data;
            })
        })
    }

    constructor(private http: HttpclientService) { }

    ngOnInit() {
        this.http.post('qaddress',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
            this.arraddress = res.data;
        })
    }

}
