import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../../../services/common.service'
import { HttpclientService } from '../../../services/httpclient.service'
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'sendinfo',
  templateUrl: './sendinfo.component.html',
  styleUrls: ['./sendinfo.component.scss']
})
export class SendinfoComponent implements OnInit {

  constructor(private http:HttpclientService,private com:CommonService,private router: Router) { }

    // 变量
    orderDataset:Object = {};
    user:Object;
    consig:Object;

    // 方法
    // 返回历史
    goToBack(){
      // window.sessionStorage.removeItem('orderDataset');
      this.router.navigate(['/car'])
    }

    // 点击出现子组件
    showOrderman(){
        this.com.orderman_show= true ;
    }
    // 去结算
    goToAccount(){
        var goods = [];
        this.orderDataset.Data.forEach(item=>{
            goods.push({id:item.id,goodid:item.goodid,qty:item.qty})
        })
        var goodImg = this.orderDataset.Data[0].img;
        var userid = this.user.id;
        var userMsg = this.user;
        var total = this.orderDataset.total;
        var consigid = this.consig ? this.consig.id : null;
        var deliveryDate = $('#dates').val();
        var guestbook = $('#guestbook').val();
        var data = {goods,goodImg,userid,userMsg,total,consigid,deliveryDate,guestbook}
        if(!consigid){
            $('#MsendInfo .hint').fadeIn().text('请选择收货地址！');
            setTimeout(function(){
                $('#MsendInfo .hint').fadeOut('slow');
            },1500)
        }else if(!deliveryDate){
            $('#MsendInfo .hint').fadeIn().text('请选择送达日期！');
            setTimeout(function(){
                $('#MsendInfo .hint').fadeOut('slow');
            },1500)
        }else{
           this.http.post('MaddOrder',{data:JSON.stringify(data)}).then(res=>{
                if(res["status"]){
                    window.sessionStorage.removeItem('orderDataset');
                    window.sessionStorage.removeItem('newAddress');
                    this.router.navigate(['/car/Mpayment/'+total]);
                }
           })
        }
    }

    ngOnInit() {
        this.orderDataset=JSON.parse(window.sessionStorage.getItem('orderDataset'));
        this.com.spinner_show = true;
        // 获取用户信息和默认收货地址信息
        this.http.get('MgetUser',{id:this.orderDataset.userid}).then(res=>{
            this.com.spinner_show = false;
            this.user=res["data"][0][0];
            this.consig=JSON.parse(window.sessionStorage.getItem("newAddress")) || res["data"][1][0] || null;
        })
    }

}
