import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpclientService } from '../../services/httpclient.service'
import { ElMessageService } from 'element-angular'
import * as $ from "jquery"
declare var Swiper: any;
@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'], encapsulation: ViewEncapsulation.None})

export class DetailComponent implements OnInit {
    private boxState: String = 'left';
    private _isTrue: Boolean = true;
     dataset:Object={};
     imgs:Array<any>=[];
     proid:string = this.route.snapshot.paramMap.get('id');
     userid:string = window.sessionStorage.getItem("userID");
     col:Boolean = false;
     isshow:Boolean = false;
     title:string = "花花世界";
     //返回顶部
     totop(){
        $(".main").animate({scrollTop: 0}, 1000,'swing');
     }

     //显示信息
     showMessage(mes){
        $("#message").html(mes).stop(true).fadeIn(1500).fadeOut(1500);;
     }
     
     //返回
     goback(){
        window.history.go(-1);
     }

     //返回主页
     gohome(){
        this.router.navigate(['/']);
     }
     
     //滚动事件
     mscroll(e){
        var scroll = e.target.scrollTop;
        if(scroll<800){
            $('#ct_detail .header').css("opacity",scroll/1000);
        }else{
            $('#ct_detail .header').css("opacity",0.8);

        }
        if(scroll >1000){
            $('#ct_detail .header h3').stop(true).fadeIn(1500);
            $("#totop").stop(true).fadeIn(1500);
        }else{
            $('#ct_detail .header h3').stop(true,).fadeOut(1500);
            $("#totop").stop(true).fadeOut(1500);

        }
     }

     //添加到购物车
     addcar(){
        this.isshow = true;
        this.http.post("ctaddcar",{userid:this.userid,goodid:this.proid}).then((res) => {
            this.isshow = false;
            if(res['status']){
                this.showMessage("添加购物车成功");
            }else{
                if(res['message'] == 'unauthorized'){
                    this.router.navigate(['/login']);
                }
            }
        })
     }

     //点击收藏
     collect(){
        this.col = !this.col;
        this.isshow = true;
        if(this.col){
            this.http.post('ctaddcollect',{userid:this.userid,productid:this.proid}).then((res) => {
                if(res['status']){
                    this.showMessage("添加收藏夹成功");
                    this.isshow = false;
                }else{
                    if(res['message'] == 'unauthorized'){
                        this.router.navigate(['/login']);
                    }
                }
            })
        }else{
            this.http.post('ctRemovecollect',{userid:this.userid,productid:this.proid}).then((res)=> {
                if(res['status']){
                    this.showMessage("删除收藏夹成功");
                    this.isshow = false;
                }else{
                    if(res['message'] == 'unauthorized'){
                        this.router.navigate(['/login']);
                    }
                }
            })
        }
     }

     //立即购买
     buynow(){
        if(!window.sessionStorage.getItem('userID')){
            this.router.navigate(['/login']);
        }else{
            var params = {
                userid:this.userid,
                total:this.dataset['price'],
                Data:[{'goodid':this.proid,'img':this.imgs[0],'qty':1}]
            }

            window.sessionStorage.setItem('orderDataset',JSON.stringify(params));
            this.router.navigate(['/car/sendinfo']);
        }
     }
     
  constructor(private http:HttpclientService,private route: ActivatedRoute,private message: ElMessageService,private router: Router) {
       
   }
  ngOnInit() { 
     var mySwiper = new Swiper('.swiper-container',{
         autoplay:true,
         pagination: {
           el: '.swiper-pagination',
         },
         observer:true,//修改swiper自己或子元素时，自动初始化swiper
         observeParents:true,//修改swiper的父元素时，自动初始化swiper
     })
    this.isshow = true;
    this.http.get("ctgetgoods",{proid:this.proid}).then((res) => {
        if(res['status']){
            this.dataset = res['data'][0];
            this.imgs = res['data'][0].img.split(",");
            this.http.get("ctgetcollect",{userid:this.userid,productid:this.proid}).then((res) => {
                this.col = res['status'];
                this.isshow = false;
                this.title = this.dataset['flowerName'].split("-")[0];
            })
        }else{
            alert("该商品不存在")
        }
         })
    }
}
