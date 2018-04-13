import { Component, OnInit,Input} from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

    constructor(private http:HttpclientService,private com:CommonService,private router:Router) { }

    // 变量
    count:Number = 0;
    total:Number = 0;
    footer_show:boolean = false;
    userid = null;
    dataset:Array<any> = [];
    reDataset:Array<any> = [];
    sendinfoData:Array<any> = [];

    // 方法
    // 返回历史
    goToBack(){
        history.go(-1);
    }
    // 导航栏动态出现
    showFooter(){
        this.footer_show = !this.footer_show;
    }
    // trackBy调用函数
    byName(idx,obj){
        return idx;
    }
    // 获取当前用户购物车商品
    getGoods(){
        if(this.userid){
            this.com.spinner_show = true;
            this.http.get('MgetCar',{userid:this.userid}).then(res=>{
                this.com.spinner_show = false;
                if(res['status']){
                    this.dataset=res["data"];
                    var _count = 0,_total=0;
                    this.sendinfoData = [];
                    res['data'].forEach((item,idx)=>{
                        if(item.checked){
                            _count += item.qty;
                            _total += item.qty*item.goodMsg.price;
                            this.sendinfoData.push(item);
                        }
                        this.dataset[idx]['img']=item.goodMsg.img.split(',')[0] || item.goodMsg.img;
                    })
                    this.count = _count;
                    this.total = _total;
                }else{
                    this.dataset=[];
                }
            })
        }
    }
    // 修改数量
    changeQty(e,id,qty,type){
        if(type == 'sub'){
            qty--;
            if(qty <= 1){
                qty=1;
            }
        }else if(type == 'add'){
            qty++;
        }else if(type == 'input'){
            qty=e.target.value;
            if(qty <= 1){
                qty=1;
            }
        }
        this.http.post('MupdateGood',{id,qty}).then(res=>{
            if(res){
                this.getGoods();
            }
        })
    }
    // 改变勾选状态
    changeChecked(e,id){
        var checked = 0;
        if(e.target.checked){
            checked = 1;
        }
        this.http.post('MupdateGood',{id,checked}).then(res=>{
            if(res){
                this.getGoods();
            }
        })
    }
    // 删除购物车商品
    delGood(id){
        if(id){
            this.http.post('MdelGood',{id}).then(res=>{
                if(res){
                    this.getGoods();
                }
            })
        }
    }
    // 点击去结算
    goToAccount(){
        if(this.count <=0){
            $('#Mcar .hint').fadeIn().text('您还没有选择要购买的商品');
            setTimeout(function(){
                $('#Mcar .hint').fadeOut('slow');
            },2000)
            return;
        }
        window.sessionStorage.setItem('orderDataset',JSON.stringify({userid:this.userid,total:this.total,Data:this.sendinfoData}));
        this.router.navigate(['/car/sendinfo']);
    }

    // 钩子函数
    ngOnInit() {
        this.userid = window.sessionStorage.getItem('userID');
        this.getGoods();
        // 生成一个随机数，用来随机筛选商品，模拟“购买该商品的还购买了”
        var page = parseInt(Math.random()*6+1);
        this.http.get('MgetGoods',{page,limit:10}).then(res=>{
            this.reDataset = res['data'];
            var $ul = $("#Mcar .main .other .otherList ul");
            setTimeout(function(){
                var $lis = $ul.find('li');
                $ul.css('width',$lis.outerWidth(true)*$lis.length+5);
            },36)
        })
    }
}
