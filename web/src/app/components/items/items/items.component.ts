import { Component, OnInit, OnChanges } from '@angular/core';
import * as $ from 'jquery';
import { HttpclientService } from '../../../services/httpclient.service';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
	selector: 'items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit,OnChanges {
	dataset: Array<string> = [];
	ishot: boolean = true;
	top_banner: Array<string> = ['https://img02.hua.com/m/remind/18_byz_all.jpg','https://img02.hua.com/m/remind/all_cla_ban_business%20flower.jpg', 'https://img02.hua.com/m/remind/all_cla_ban_freflowers.jpg', 'https://img02.hua.com/m/remind/all_cla_gift%20busket.jpg','https://img02.hua.com/m/remind/all_cla_ban_doll.jpg','https://img02.hua.com/m/remind/all_cla_ban_cake.jpg','https://img02.hua.com/m/remind/all_cla_ban_gift.jpg'];
	banner_img: string = 'https://img02.hua.com/m/remind/18_byz_all.jpg';
	kind: string = 'hot';
	allkinds: Array<string>=[];
	constructor(private http:HttpclientService, private router: Router,private com:CommonService) {}

	ngOnInit() {
		$('#lcitems .lcfooter .footer ul li').eq(1).addClass("active");
		let idx = this.com.setItems.slice(1);
		$('.left_list').find('li').removeClass('lcactive');
		$($('.left_list').find('li')[idx]).addClass('lcactive');
		if(idx!='0'){
			this.ishot = false;	
			this.http.get('keCategories',{kind: this.com.setItems}).then(res => {
				this.dataset = res['data'].data;
				this.kind = this.com.setItems;
			})
		}
	}
	ngOnChanges(){
		
	}
	selectItem(e){
		let tgname = e.target.tagName.toLowerCase();
		if(tgname == 'li'){
			$(e.target).addClass('lcactive');
			$(e.target).siblings().removeClass('lcactive');
			let kind = $(e.target).data('kind');
			let idx = $(e.target).index();
			this.banner_img = this.top_banner[idx];
			this.kind = kind;
			this.http.get('keCategories',{kind: kind}).then(res => {
				this.dataset = res['data'].data;
				this.allkinds = [];
				for(let idx in this.dataset){
					this.allkinds.push(this.dataset[idx]['listname'])
				}
				window.sessionStorage.setItem('categories', JSON.stringify(this.allkinds));
			})
			if(kind=='hot'){this.ishot = true;}
			else{this.ishot = false;}
		}
	}
	showicondel(){
		let searval = $('.inputsearch').val();
		if(searval == ''){$('.fa-times').hide()}
		else{$('.fa-times').show()}
	}
	del(){
		$('.inputsearch').val('');
		this.showicondel();
	}
	searchkey(_keyword){
		console.log(_keyword.value)
		this.router.navigate(['search',_keyword.value]);
	}

}
