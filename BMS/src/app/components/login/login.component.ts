import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import { HttpclientService } from '../../services/httpclient.service';
import * as $ from 'jquery';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpclientService,private router:Router){ }  

  ngOnInit() {
    this.auth();
  }
  auth(){
    let arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      let vcode='';
      for(var i=0;i<4;i++){
          vcode += arr[parseInt(Math.random()*arr.length)]
      }
      $('.yzm').text(vcode);
  }
  enter(){
        var yzm = $('.yzm').text().toLowerCase();
        console.log(yzm);
        var user = $('#user').val();
        var pwd = $('#pwd').val();
        var yz = $('#yz').val();
        // console.log(yzm,user,pwd,yz)
        if(yz !=yzm){
            alert('输入有误')
        }else{
            this.http.get('hkadmin',{username:user,password:pwd}).then(res=>{
                console.log(res.status);
              if(res.status == true){
                window.sessionStorage.setItem('username',user);
                this.router.navigate(['/']);
              }else{
                alert('登录信息有误')
              }
            }) 
        } 
  }

}
