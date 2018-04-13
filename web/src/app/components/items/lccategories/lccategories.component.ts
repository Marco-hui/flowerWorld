import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
	selector: 'lccategories',
	templateUrl: './lccategories.component.html',
	styleUrls: ['./lccategories.component.scss']
})
export class LccategoriesComponent implements OnInit,OnChanges {
	@Input() dataset: Array<string>;
	@Input() ishot: boolean;
	@Input() banner_img: string;
	@Input() kind: string;
	constructor(private router: Router) { }
	ngOnInit() {
	}
	ngOnChanges(){
	}
	goto(_kind){
		if(_kind == '全部'){
			_kind = this.kind;
		}
		this.router.navigate(['list',_kind]);
	}
	tolist(span){
		let kind = span.innerText;
		this.goto(kind);		
	}
	toall(e){
		let idx = $(e.target.closest('li')).index()+1;
		let kind = 't' + idx;
		this.goto(kind);
	}
	trackByName(index, obj) {
	    return obj.id;
	}
}
