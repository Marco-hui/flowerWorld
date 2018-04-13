import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpclientService } from '../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    code: Number = 0;
    code2: Number = 0;
    reg: boolean = false;

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router){ }

    changeNum(){
        this.code = Math.floor(Math.random()*9000)+1000;
        $('.qsj span').html(this.code);
    }
    takeNum(){
        this.code2 = Math.floor(Math.random()*9000)+1000;
        alert('您收到一条新消息！短信验证码为  '+this.code2+'  ,请勿告诉其他人...');
    }

    changevalue(){
        var phone = $('input.qphone')[0].value
        var psw = $('input.qpsw')[0].value
        var psw2 = $('input.qpsw2')[0].value
        var sj = $('.qsj input')[0].value
        var meg = $('.qmeg input')[0].value

        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))){ 
            $('.qtips').html('手机格式不正确！')
            return; 
        }else{
            this.http.get('qcz',{username:$('input.qphone')[0].value}).then((res)=>{
                if(res.data.length == 0){
                    
                }else{
                    $('.qtips').html('该手机号已被注册！');
                    return;
                }
            }) 
        }
        if(!(/^[a-zA-Z]\w{5,17}$/.test(psw))){ 
            $('.qtips').html('密码格式不正确！')
            return; 
        }else{
            $('.qtips').html('')
        }
        if(!(psw == psw2)){ 
            $('.qtips').html('俩次密码不一致')
            return; 
        }else{
            $('.qtips').html('')
        }
        if(!(sj == this.code)){ 
            $('.qtips').html('随机验证码不正确')
            return; 
        }else{
            $('.qtips').html('')
        }
        if(!(meg == this.code2)){ 
            $('.qtips').html('短信验证码不正确')
            return; 
        }else{
            $('.qtips').html('')
            this.reg = true;
        }
    }

    zc(){
        if(this.reg){
            this.http.get('qreg',{username:$('input.qphone')[0].value,password:$('input.qpsw')[0].value}).then((res)=>{
                console.log(res)
            })
            this.router.navigate(['/login']);
        }else{
            alert('请填写完整信息！')
        }
    }

    ngOnInit() {
        this.changeNum();
    }

}