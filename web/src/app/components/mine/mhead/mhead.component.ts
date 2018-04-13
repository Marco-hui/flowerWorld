import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpclientService } from '../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';

@Component({
    selector: 'mhead',
    templateUrl: './mhead.component.html',
    styleUrls: ['./mhead.component.scss']
})
export class MheadComponent implements OnInit {
    
    show: boolean = true;
    show2: boolean = false;
    headimg: string = '';
    nickname: string | number | string[] = '';

    constructor(private http: HttpclientService) { }

    ngOnInit() {
        if(window.sessionStorage.getItem('xxtoken')){
            this.show2 = true;
            this.show = false;
            this.http.get('qusermsg',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
  
                this.headimg = 'http://localhost:1010/'+res.data[0].headImg
                this.nickname = res.data[0].nickname
            })
        }else{
            this.show2 = false;
            this.show = true;
        }
    }

}
