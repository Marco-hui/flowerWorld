import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { HttpclientService } from '../../services/httpclient.service';
import {Http} from '@angular/http';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataset:Object<any>;
  columns: Object<any>;
  admindataset:Object<any>;
  kindClass:String;
  // num:String;
  allClass:String;
  pageNum:Number;
  qty:Number=10;
  bbbbb:boolean=false;
  ccccc:boolean=false;


  constructor(private router:Router,private http:HttpclientService,private lhttp: Http) { }
  // 显示当前用户
  ngOnInit() {
    if(window.sessionStorage.getItem('username')){
       let userName = window.sessionStorage.getItem('username');
        $('h5').html(userName)
    }else{
        this.router.navigate(['/login']);
    }
  }
  //退出登录
  exit(){
    window.sessionStorage.removeItem('username');
    let msg="你确定要退出吗？"
    if(confirm(msg)==true){
        window.location.reload() 
    }
  }
  // 导航
  liclick(event: any){

    // if(event.target.val()=="")
    $(event.target).find('.aaa').slideToggle();
    
  }
  //过滤文档
  filter(){
    this.lhttp.get('http://localhost:8080/assets/config/flower.txt').subscribe((res)=>{
            let obj =res.json();
            this.columns = obj.cols.split(',');
    }) 
  }
  // 点击分类
  subclass(e){
    let tag = e.target.tagName.toLowerCase();
    let kind =$(e.target).data('kind');
    console.log(kind);
    
    this.kindClass= kind;
    if(tag == 'li'){
      this.bbbbb=true;
      this.ccccc=false;
      $(".lcnav .highlight").removeClass('highlight');
      $(e.target).addClass('highlight');
      if(kind=='all'){
           this.http.get('hkgoods',{page:1,qty:this.qty}).then(res=>{
           console.log(res)
            this.dataset = res['data'];

            if(res.data.rowsCount%this.qty>0){
              this.pageNum=res.data.rowsCount/this.qty+1;
            }else{
              this.pageNum=res.data.rowsCount/this.qty
            }
        })
      }else{
        let kind =$(e.target).data('kind');
        this.http.get('goodslist',{kinds:kind,page:1,qty:this.qty}).then(res=>{
          this.dataset = res['data'];

           // this.num = res.data.rowsCount;
            if(res.data.rowsCount%this.qty>0){
              this.pageNum=res.data.rowsCount/this.qty+1;
            }else{
              this.pageNum=res.data.rowsCount/this.qty
            }

        })
      }
      this.filter();
    }    
  }
  //账号管理
  acct(e){
      $(".lcnav .highlight").removeClass('highlight');
      $(e.target).addClass('highlight');
     let tag = e.target.tagName.toLowerCase();
      let kind =$(e.target).data('kind');
      $(e.target).addClass('highlight');
      $(e.target).siblings().removeClass('highlight');
      if(tag == 'li'){
      this.bbbbb=false;
      this.ccccc=true;
        if(kind=="gly"){
          this.http.get('gladmin').then(res=>{
              this.admindataset = res['data'];
          })
        }else{
          this.http.get('yhuser').then(res=>{
              this.admindataset = res['data'];
          })
        }
        this.filter();
      }
  }
}
