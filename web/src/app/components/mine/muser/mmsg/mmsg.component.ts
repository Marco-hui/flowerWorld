import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { HttpclientService } from '../../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'mmsg',
    templateUrl: './mmsg.component.html',
    styleUrls: ['./mmsg.component.scss']
})
export class MmsgComponent implements OnInit {

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    nickname: number | string | string[] = '';
    email: number | string | string[] = '' ;
    sex: string = '';
    headImg:string;
    birthday:number|string|string[];
    birthday2:number|string|string[];
    y: number ;
    m: number ;
    d: number ;
    checkbox: boolean = true;

    updateHead(){
        var formData = new FormData($( "#uploadFile" )[0]); 
        $.ajax({  
          url: 'http://10.3.136.48:1010/quploadhead' ,  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,  
          contentType: false,  
          processData: false, 
          success:(res) =>  {  
              this.headImg = res.data;
          }
        })
    }

    updatamsg(){
        if($('.qman')[0].checked){
            this.sex='男';
        }
        if($('.qwomen')[0].checked){
            this.sex='女';
        }
        this.birthday2 = $('#qy').val() + '/' + $('#qm').val() + '/' + $('#qd').val()
        this.http.post('qupdatauser',{id:window.sessionStorage.getItem('userID'),headImg:this.headImg,nickname:this.nickname,sex:this.sex,birthday:this.birthday2,email:this.email}).then((res)=>{
            this.router.navigate(['/mine']);
        })
    }

    choosegender(e){
        $(e.target).siblings('input')[0].checked=false;
    }

    ngOnInit() {

        
        this.http.get('qusermsg',{id:window.sessionStorage.getItem('userID')}).then((res)=>{
            for(var i = 1950;i<2001;i++){
                var y = $('<option/>').html(i)
                y.appendTo($('#qy'))
            }
            for(var i = 1;i<13;i++){
                var m = $('<option/>').html(i)
                m.appendTo($('#qm'))
            }
            for(var i = 1;i<32;i++){
                var d = $('<option/>').html(i)
                d.appendTo($('#qd'))
            }
            this.nickname = res.data[0].nickname
            this.email = res.data[0].email
            this.sex = res.data[0].sex
            this.birthday = res.data[0].birthday
            this.headImg = res.data[0].headImg;
            
            if(this.sex=='男'){
                $('.qman')[0].checked=true;
                $('.qman').siblings('input')[0].checked=false;
            }
            if(this.sex=='女'){
                $('.qwomen')[0].checked=true;
                $('.qwomen').siblings('input')[0].checked=false;
            }
            if(this.birthday){
                var arrbirthday = this.birthday.split('/')
                for(let i=0;i<$("#qy").find("option").length;i++){
                    if($("#qy").find("option")[i].innerHTML==arrbirthday[0]){
                    $("#qy").find("option").eq(i).attr('selected','selected')
                    }
                }
            }
            if(this.birthday){
                var arrbirthday = this.birthday.split('/')
                for(let i=0;i<$("#qm").find("option").length;i++){
                    if($("#qm").find("option")[i].innerHTML==arrbirthday[1]){
                    $("#qm").find("option").eq(i).attr('selected','selected')
                    }
                }
            }
            if(this.birthday){
                var arrbirthday = this.birthday.split('/')
                for(let i=0;i<$("#qd").find("option").length;i++){
                    if($("#qd").find("option")[i].innerHTML==arrbirthday[2]){
                    $("#qd").find("option").eq(i).attr('selected','selected')
                    }
                }
            }
        })
    }

}
