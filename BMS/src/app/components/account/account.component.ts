
import { Component, OnInit,Output,EventEmitter,Input,OnChanges} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { HttpclientService } from '../../services/httpclient.service';
import {Http} from '@angular/http';

import * as $ from 'jquery';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    ssid:String;
    @Input() admindataset:Object<any>;
    @Input() columns: Object<any>;
    // a :boolean = false
    
    constructor(private http:HttpclientService) { }

    ngOnChanges(){
    }
    ngOnInit() {
    }

    // 再次请求数据
    refresh(){
      this.http.get('gladmin').then(res=>{
          this.admindataset = res['data'];
      })
    }
    // 添加管理员
    adduser(){
      $('.hkshade_box').css({"display":"block"});
    }
      affirm(){
        var addname = $('#addname').val();
        var addpasss = $('#addpasss').val();
        if(addname =='' || addpasss == ''){
            alert("管理员账号密码不可以为空")
        }else{
          this.http.post('adduser',{username:addname,password:addpasss}).then(res=>{
          });
          this.refresh();
          $('#addname').val("");
          $('#addpasss').val("");  
          $('.hkshade_box').css({"display":"none"});
        }
      }
      cancel(){
      $('.hkshade_box').css({"display":"none"});
      }
    // 删除
    removeuser(e){
      var idx = $(e.target).parent().parent().attr('id');
      let msg="你确定要删除这个管理员吗？";
      if(confirm(msg)==true){
        this.http.post('removeuser',{id:idx}).then(res=>{
        });
        this.refresh();
      }     
    }
    // 修改密码
    revamp(e){
      $('.hkshade_box1').css({"display":"block"});
       var idd = $(e.target).parent().parent().attr('id');
       this.ssid=idd;
    } 
    cancel_m(){
          $('.hkshade_box1').css({"display":"none"});
    }
    affirm_m(){
      var newpasss = $('#newpasss').val();
      if(newpasss == ""){
        alert("密码不可设为空");
      }else{
        this.http.post('revampuser',{id:this.ssid,pass:newpasss}).then(res=>{
        this.admindataset = res['data'];
      });
      this.refresh();
      }
      $('.hkshade_box1').css({"display":"none"});
    }
      getKeys(item){
      return item ? Object.keys(item): [];
    }

    trackByName(index, obj) {
    return obj.name;
}
    
}
