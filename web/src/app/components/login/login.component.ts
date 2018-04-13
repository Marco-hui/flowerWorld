import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import * as $ from 'jquery'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    phone: number = 0;
    psw: number = 0;

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    dl(){
        this.phone = $('.qphone')[0].value;
        this.psw = $('.qpsw')[0].value;

        this.http.get('qlogin',{username:this.phone,password:this.psw}).then((res)=>{
            if(res.status){
                window.sessionStorage.setItem('xxtoken',res.data.token)
                window.sessionStorage.setItem('userID',res.data.id)
                this.router.navigate(['/mine']);
            }else{
                alert('登录信息有误！')
            }
        })
    }

    ngOnInit() {
    }

}
