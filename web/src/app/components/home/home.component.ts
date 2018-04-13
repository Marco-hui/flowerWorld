import { Component, OnInit } from '@angular/core'; 
import * as $ from 'jquery';
import {CommonService} from '../../services/common.service';
import { HttpclientService } from '../../services/httpclient.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(private http: HttpclientService,private com:CommonService,private router: Router){}
  	
  	dataset:Array<any>;
  	dataset2:Array<any>;
  	dataset3:Array<any>;
  	dataset4:Array<any>;
  	ngOnInit() {
    	$('.footer ul li').first().addClass('active');
        var userID = window.sessionStorage.getItem('userID');
        var mySwiper = new Swiper('.swiper-container',{
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })
        if(userID){
            $('#Chome .login a').text('退出');
        }else{
            $('#Chome .login a').text('登录');
        }

    	this.http.get('goods').then((res) => {
    		const aa = res.data.data;
    		const uts = [];
            
            for(var i = 0; i < aa.length; i++){
            		const mg = aa[i].img.split(',').slice(0,1).join();
            		const na = aa[i].flowerName.split('-').slice(0,1).join();
            		const ps = aa[i].flowerName.split('-').slice(1).join();
            		
                    uts.push({
                        id: aa[i].id,
                        img: mg,
                        price: aa[i].price,
                        name: na,
                        pst : ps
                    });
                   
            }
            this.dataset = uts;
            
        });
        this.http.get('goods2').then((res) => {
    		const aa = res.data.data;
    		const uts = [];
            
            for(var i = 0; i < aa.length; i++){
            		const mg = aa[i].img.split(',').slice(0,1).join();
            		const na = aa[i].flowerName.split('-').slice(0,1).join();
            		const ps = aa[i].flowerName.split('-').slice(1).join();
            		
                    uts.push({
                        id: aa[i].id,
                        img: mg,
                        price: aa[i].price,
                        name: na,
                        pst : ps
                    });
                   
            }
            this.dataset2 = uts;
            
        });
        this.http.get('goods3').then((res) => {
    		const aa = res.data.data;
    		const uts = [];
            
            for(var i = 0; i < aa.length; i++){
            		const mg = aa[i].img.split(',').slice(0,1).join();
            		const na = aa[i].flowerName.split('-').slice(0,1).join();
            		const ps = aa[i].flowerName.split('-').slice(1).join();
            		
                    uts.push({
                        id: aa[i].id,
                        img: mg,
                        price: aa[i].price,
                        name: na,
                        pst : ps
                    });
                   
            }
            this.dataset3 = uts;
            
        });
        this.http.get('goods4').then((res) => {
    		const aa = res.data.data;
    		const uts = [];
            
            for(var i = 0; i < aa.length; i++){
            		const mg = aa[i].img.split(',').slice(0,1).join();
            		const na = aa[i].flowerName.split('-').slice(0,1).join();
            		const ps = aa[i].flowerName.split('-').slice(1).join();
            		
                    uts.push({
                        id: aa[i].id,
                        img: mg,
                        price: aa[i].price,
                        name: na,
                        pst : ps
                    });
                   
            }
            this.dataset4 = uts;
            
        });
	}

	getKeys(item){
		return Object.keys(item);
	}
	goods($event){
	    var id = $event.target.parentNode.id
	    if($event.target.tagName == 'IMG'){    
	        this.router.navigate([`detail/${id}`]); 
	    }
	    if($event.target.tagName == 'P'){
            this.router.navigate([`detail/${id}`]); 
	    }
	}
	goTop($event){
		$('.main').animate({
	       scrollTop: "0px"
	    }, 1000);
	}
    jump($event){
        if($event.target.parentNode.id == 'flowers1'){
            this.router.navigate(['/list/t1']);
        }
        if($event.target.parentNode.id == 'flowers2'){
            this.router.navigate(['/list/t2']);
        }
        if($event.target.parentNode.id == 'flowers3'){
            this.router.navigate(['/list/t5']);
        }
        if($event.target.parentNode.id == 'flowers4'){
            this.router.navigate(['/list/t6']);
        }
        if($event.target.parentNode.id == 'flowers5'){
            this.router.navigate(['/list/诺心']);
        }
        if($event.target.parentNode.id == 'cflowers1'){
            this.router.navigate(['/list/爱情鲜花']);
        }
        if($event.target.parentNode.id == 'cflowers2'){
            this.router.navigate(['/list/友情鲜花']);
        }
        if($event.target.parentNode.id == 'cflowers3'){
            this.router.navigate(['/list/金箔花']);
        }
        if($event.target.parentNode.id == 'cflowers4'){
            this.router.navigate(['/list/t3']);
        }
        
    }

    logout(){
        window.sessionStorage.removeItem('userID');
        window.sessionStorage.removeItem('xxtoken');
    }


}
