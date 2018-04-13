import { Component, OnInit,Output,EventEmitter,Input,OnChanges} from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service';
import {Http} from '@angular/http';
import * as $ from 'jquery';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    // proid:String;
    @Input() dataset:Object<any>;
    @Input() columns: Object<any>;
    @Input() kindClass:String;
    @Input() qty:Number;
    @Input() allClass:String;
    @Input() pageNum:Number;
    nowPage:String;
    imgUrls:Array<any>=[];
    RevId:String;
    rexgoods:Array<any>;
    pages:Array<any>=[];
    pag:Number=1;


    constructor(private http:HttpclientService,private lhttp: Http) { }
    ngOnChanges(){
      if(this.pageNum){
        this.pages=[];
        for(let i=1;i<=this.pageNum;i++){
          this.pages.push(i);
        }
      }
      this.pag=1;
    }
    ngOnInit() { 

    }
    //刷新数据库
    refresh(){
      this.http.get('goodslist',{kinds:this.kindClass,page:this.nowPage,qty:this.qty}).then(res=>{
        this.dataset = res['data'];
      })
    }
    // 刷新全部商品数据
    refreshG(){
      console.log(this.nowPage)
       this.http.get('hkgoods',{page:this.nowPage,qty:this.qty}).then(res=>{
        this.dataset = res['data'];
        if(res.data.rowsCount%this.qty>0){
          this.pageNum=res.data.rowsCount/this.qty+1;
        }else{
          this.pageNum=res.data.rowsCount/this.qty
        }
      })
    } 
    //过滤文档 
    filter(){
      this.lhttp.get('http://localhost:4200/assets/config/flower.txt').subscribe((res)=>{
              let obj =res.json();
              this.columns = obj.cols.split(',');
      }) 
    }
    // 点击添加显示框
    OnAddgoods(){
      $('.hkshade_box1').css({"display":"block"});
    }

    
    // 添加商品确定按钮
    goodsAdd(){
      let goodsName = $('#goodsName').val();
      let goodsType = $('#goodsType').val();
      let biglistnameid = $('#goodsTypeid').val();
      let typeid = $('#goodsClass').val();
      let goodsPrice = $('#goodsPrice').val();
      let goodOprice = $('#goodsOprice').val();
      if(goodsName =='' || goodsType == '' || goodsClass == '' || goodsPrice == ''|| goodOprice == ''|| this.imgUrls == [] || goodsTypeid == ''){
            alert("商品添加不可有空");
        }
        else{
          this.http.post('addgoods',{flowerName:goodsName,img:this.imgUrls,type:goodsType, typeid:typeid,biglistnameid:biglistnameid,price:goodsPrice,oprice:goodOprice}).then(res=>{
            console.log(res.data);
          });
          $('.gooodsinput').val("");
          
          $('.hkshade_box1').css({"display":"none"});
          this.refresh();
        }

    }
    // 删除商品
    delgoods(e){
      var idx = $(e.target).parent().parent().attr('id');
      console.log(idx)
      let msg="你确定要删除这调数据？";
      if(confirm(msg)==true){
        this.http.post('delgoods',{id:idx}).then(res=>{
        }); 

      this.refreshG();  
      }
    }
    // 取消添加
    goodsAddhide(){
     $('.hkshade_box1').css({"display":"none"});
     }
    // 商品搜索
    btnsearch(){
      this.kindClass='';
      var sname = $('.mr-sm-2').val();
      if(sname == ''){
          alert("请输入要搜索的商品");
      }else{
        this.http.get('searchgoods',{sqlname:sname,page:1,qty:10}).then(res=>{
          this.dataset = res['data'];
          // console.log(res.data);
          // console.log(res.data.rowsCount);
          if(res.data.rowsCount%this.qty>0){
            this.pageNum=res.data.rowsCount/this.qty+1;
            // console.log(this.pageNum);
            this.pages=[];
            for(let i=1;i<=this.pageNum;i++){
              this.pages.push(i);
            }
          }else{
            this.pageNum=res.data.rowsCount/this.qty;
            this.pages=[];
            for(let i=1;i<=this.pageNum;i++){
              this.pages.push(i);
            }
          }
        });
      }
    }
    // 上传图片
    uploading(e){
      var formData = new FormData($( "#uploadForm" )[0]); 
      console.log(formData); 
      $.ajax({  
        url: 'http://localhost:1010/uploadcircleImg',  
        type: 'POST',  
        data: formData,  
        async: false,  
        cache: false,  
        contentType: false,  
        processData: false, 
        success:  (res) => {  
            this.imgUrls=res.data;
            // console.log(this.imgUrls);
        }
      })
      console.log(this.imgUrls);
    }
    //点击修改 
    upload(e){
     var formData = new FormData($( "#uploadForml" )[0]); 
     // console.log(formData); 
     $.ajax({  
       url: 'http://localhost:1010/uploadcircleImg',  
       type: 'POST',  
       data: formData,  
       async: false,  
       cache: false,  
       contentType: false,  
       processData: false, 
       success:  (res) => {  
           this.imgUrls=res.data;
           // console.log(this.imgUrls);
       }
     })
     // console.log(this.imgUrls); 
     $('#chaneImg').val(this.imgUrls)
    }
    //
    revgoods(e){
      $('.hkshade_box2').css({"display":"block"});
       var revId = $(e.target).parent().parent().attr('id');
       this.RevId = revId
       console.log(this.RevId)
       this.http.get('revquery',{id:this.RevId}).then(res=>{
        this.rexgoods = res['data'];
       })
    }
    // 取消修改
    revAddhide(){
     $('.hkshade_box2').css({"display":"none"});
     // console.log(this.imgUrls);
     }
    //确定修改
    revConfirm(){
      let goodsName = $('#xName').val();
      let goodsType = $('#xType').val();
      let biglistnameid = $('#xTypeid').val();
      let img = $('#chaneImg').val();
      let typeid = $('#xClass').val();
      let goodsPrice = $('#xPrice').val();
      let goodOprice = $('#xOprice').val();
      if(goodsName =='' || goodsType == '' || goodsClass == '' || goodsPrice == ''|| goodOprice == ''|| goodsTypeid == '' || img == ''){
            alert("商品添加不可有空");
        }
        else{
          this.http.post('revampgoods',{id:this.RevId,flowerName:goodsName,type:goodsType, typeid:typeid,biglistnameid:biglistnameid,price:goodsPrice,oprice:goodOprice,img:img}).then(res=>{
          });
          $('.gooodsinput').val("");
          // this.refresh();
          $('.hkshade_box2').css({"display":"none"});
          

          if(this.kindClass == "all"){
            this.refreshG();
          }else{
            this.refresh()
          }
        }
    } 
    // 点击分页 
    Onpages(e){
      // console.log(this.kindClass)
      var Onpage = $(e.target).text();
      this.pag=Onpage;
      this.nowPage =  $(e.target).text();
      var sname = $('.mr-sm-2').val();
      // $(e.target).addClass('highlight');
      // $(e.target).siblings().removeClass('highlight');
      if(this.kindClass == 'all'){
        this.http.get('hkgoods',{page:Onpage,qty:this.qty}).then(res=>{
          this.dataset = res['data'];
        })
      }else if(this.kindClass == ''){
        this.http.get('searchgoods',{sqlname:sname,page:Onpage,qty:this.qty}).then(res=>{
          this.dataset = res['data'];
        })
      }
      else{
        this.http.get('goodslist',{kinds:this.kindClass,page:Onpage,qty:this.qty}).then(res=>{
          this.dataset = res['data'];
        })
      }
    }
    getKeys(item){
      return item ? Object.keys(item): [];
    }
}
