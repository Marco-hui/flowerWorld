import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpclientService } from '../../../services/httpclient.service';
import { CommonService } from '../../../services/common.service';
import * as $ from 'jquery';
@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	showfooter: boolean = false;
	kind: string = '';
	dataset: Array<string> = [];
	order: string = 'desc';
	allkinds: Array<string> = [];
	constructor(private route: ActivatedRoute, private router: Router, private http: HttpclientService,private com:CommonService) { 
		router.onSameUrlNavigation = 'reload';
	}
	setKind(_kind){
		this.http.get('keKind',{kind: _kind}).then( res => {
			this.dataset = res['data'].data;
			if(_kind.startsWith('t')){
				let arr = [];
				for(let idx in this.dataset){
					arr.push(this.dataset[idx]['type'])
				}
				this.allkinds = arr.filter((item,i,self)=>{
					return self.indexOf(item) == i;
				})
				window.sessionStorage.setItem('categories', JSON.stringify(this.allkinds));

			}
			this.allkinds = JSON.parse(window.sessionStorage.getItem('categories'))
		})
	}
	ngOnInit() {
		this.kind = this.route.snapshot.paramMap.get('kind');
		this.setKind(this.kind);
		// console.log($('.prolist ul')[0].children)
		// $('.prolist ul').html('')
	}
	show(){
		this.showfooter = !this.showfooter
	}
	ceil(e){
		let top = e.target.scrollTop;
		// $('.gotopBtn').hide();
		let rem = 200 / 37.5;
		let fs = Number($('html').css('fontSize').replace(/[^0-9]/ig, ""))/2;
		
		if(top > fs*rem){$('.fixed-nav').addClass('lcnavfixed')}
		else{$('.fixed-nav').removeClass('lcnavfixed')}
	}
	filter(e,_li1,_li3){
		let tgname = e.target.tagName.toLowerCase();
		if(tgname == 'li'){
			$(e.target).addClass('lcactive');
			$(e.target).siblings().removeClass('lcactive');
			$(_li3).text('价格')

			switch(e.target){
				case _li3:
					this.order == 'desc' ? this.order = 'asc' : this.order = 'desc';
					this.order == 'desc' ? $(_li3).text('价格 ▽') : $(_li3).text('价格 △');
					this.http.post('keOrder',{order: this.order, kind: this.kind}).then( res => {
						this.dataset = res['data'].data;
					})
					
					break;
				case _li1:
					this.http.get('keKind', { kind: this.kind }).then(res => {
						this.dataset = res['data'].data;
						this.order = 'desc';
					})
					break;
				default:
					this.order = 'desc';
					break;
			}
		}	
	}
	trackByName(index, obj) {
	    return obj.id;
	}
	type(_id){
		let type = ['鲜花', '永生花', '商务花', '金箔花', '蛋糕', '特色礼品'];
		let tlist = ['t1', 't2', 't3', 't4', 't5', 't6'];
		let idx = tlist.indexOf(_id);
		return type[idx];
	}
	goto(e,_li3){
		let keyword = e.target.innerText;
		$('.nav').find('li').removeClass('lcactive');
		$($('.nav').find('li')[0]).addClass('lcactive');
		$(e.target).addClass('lcnavactive');
		$(e.target).siblings().removeClass('lcnavactive');
		$(_li3).text('价格');
		if(keyword == '全部'){
			$('#lclist').animate({'scrollTop': 0},0);
			this.setKind(this.dataset[0]['biglistnameid']);
			this.kind = this.dataset[0]['biglistnameid'];
			this.router.navigate(['list', this.dataset[0]['biglistnameid']]);
		}else{
			if ($(e.target).hasClass('key')){
				this.kind = keyword;
				this.setKind(keyword);
				this.router.navigate(['list', keyword]);
			}
		}
	}
	toItems(){
		this.com.setItems = this.dataset[0]['biglistnameid'];
		this.router.navigate(['items'])
	}
	loadMore(){

	}
	
}