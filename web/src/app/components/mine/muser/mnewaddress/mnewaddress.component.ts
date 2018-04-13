import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery'

@Component({
    selector: 'mnewaddress',
    templateUrl: './mnewaddress.component.html',
    styleUrls: ['./mnewaddress.component.scss']
})
export class MnewaddressComponent implements OnInit {

    name: number | string | string[] = '';
    address: number | string | string[] = '';
    phone: number ;
    addsuccess: boolean = false;

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    suremsg(){
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){ 
            $('.qtips').html('手机格式不正确！')
            this.addsuccess = false;
            return;
        }
        if(this.address.replace(/(^s*)|(s*$)/g, "").length ==0){
            $('.qtips').html('请填写详细地址！')
            this.addsuccess = false;
            return;
        }else{
            $('.qtips').html('')
            this.addsuccess = true;
        }
    }

    newaddress(){
        if(this.addsuccess){
            this.http.post('qnewaddress',{id:window.sessionStorage.getItem('userID'),name:this.name,tel:this.phone,address:this.address}).then((res)=>{
                console.log(res)
            })
        }else{
            alert('信息填写有误！')
        }
    }

    ngOnInit() {
    }

}