import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../services/httpclient.service'
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from "jquery"

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    constructor(private http :HttpclientService,private route: ActivatedRoute,private router: Router) {
    }

    questions:string;
    dataset:object = {};
    user:object = {};
    userid:string = window.sessionStorage.getItem("userID");
    proid:string =this.route.snapshot.paramMap.get('id');
    imgurl:string ="../../../../assets/7.jpg";

    //返回
     goback(){
        window.history.go(-1);
     }

    //点击发送消息
    send(){
        var $question = $(".anwser:first").clone(true);
        $question.removeClass("anwser").addClass('question').find(".c_mes").html(this.questions);
        $question.find(".imgbox img").attr("src",this.http.baseUrl+this.user['headImg']);
        $question.find(".c_name").html(this.user['nickname']);
        $(".datagrid ul").append($question);
        $(".foot input[type=text]").val("").focus();
        this.http.post("ctgetanwser",{mes:this.questions}).then((res) => {
            
            //复制现有元素样式
            var $anwser = $(".anwser:first").clone(true);

            if(res['results'][0].resultType == "image"){
                var $c_mes = $anwser.find(".c_mes");
                $c_mes.html("");
                var $img = $("<img/>").attr("src",res['results'][0].values.image).appendTo($c_mes);
                $(".datagrid ul").append($anwser);
                $img.on('load',function(){
                    $(".datagrid").scrollTop($(".datagrid")[0].scrollHeight);
                })
            }else if(res['results'][0].resultType == "text"){
                $anwser.find(".c_mes").html(res['results'][0].values.text);
                $(".datagrid ul").append($anwser);
                $(".datagrid").scrollTop($(".datagrid")[0].scrollHeight);
            }else{
                $anwser.find(".c_mes").html("你说什么，风太大我听不到");
                $(".datagrid ul").append($anwser);
                $(".datagrid").scrollTop($(".datagrid")[0].scrollHeight);
            }
        })  
    }
    //回车事件     
    onKey(e:any){
        if(e.keyCode == 13){
            this.send();
        }
    }

    //点击发送
    sendapi(){
        var link = location.href;
        this.questions = link.replace("customer","detail");
        this.send();
        this.questions="";
    }

    ngOnInit() {
        this.http.get("ctgetgoods",{proid:this.proid}).then((res) => {
            if(res['status']){
                this.dataset = res['data'][0];
                var imgarr = this.dataset['img'].split(",");
                this.imgurl = imgarr[0];
            }
        })
        this.http.get("ctgetuser",{userid:this.userid}).then((res) => {
            if(res['status']){
                this.user = res['data'][0];
            }else{
                if(res['message'] == 'unauthorized'){
                    this.router.navigate(['/login']);
                }
            }
        })
    }

}
