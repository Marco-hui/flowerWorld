import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery'

@Component({
    selector: 'mpsw',
    templateUrl: './mpsw.component.html',
    styleUrls: ['./mpsw.component.scss']
})

export class MpswComponent implements OnInit {

    oldpsw: string | number | string[] = ''
    newpsw1: string | number | string[] = ''
    newpsw2: string | number | string[] = ''
    successdl: boolean = false;

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    changepsw(){
        this.http.post('qPsssid',{id:window.sessionStorage.getItem('userID'),password:this.oldpsw}).then((res)=>{
            if(!res.status){
                $('.qtips').html('旧密码不正确！')
                return;
            }
            if(!(/^[a-zA-Z]\w{5,17}$/.test(this.newpsw1))){ 
                $('.qtips').html('密码格式不正确！')
                return; 
            }
            if(this.newpsw1 != this.newpsw2){
                $('.qtips').html('俩次密码不一致！')
                return;
            }else{
                $('.qtips').html('')
                this.successdl = true;
            }
        })  
    }

    updatapsw(){
        if(this.successdl){
            this.http.post('qPsss',{id:window.sessionStorage.getItem('userID'),newpass:this.newpsw1}).then((res)=>{
                this.router.navigate(['/login']);
            })
        }else{
            alert('请完善修改的信息！')
        }
    }

    ngOnInit() {
    }

}
