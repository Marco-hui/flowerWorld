import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpclientService } from '../../../services/httpclient.service';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	dataset: Array<string> = [];
	showfooter: boolean = false;
	rowscount: number = 0;
	keyword: string = '';
	constructor(private route: ActivatedRoute, private router: Router, private http: HttpclientService) { }

	searchRes(_keyword){
		this.keyword = _keyword;
		this.http.get('keSearch',{keyword: this.keyword}).then( res => {
			this.rowscount = res['data'].rowsCount;
			this.dataset = res['data'].data
		})
	}
	ngOnInit() {
		let keyword = this.route.snapshot.paramMap.get('keyword');
		this.searchRes(keyword);
	}
	show(){
		this.showfooter = !this.showfooter
	}
	trackByName(index, obj) {
	    return obj.id;
	}
	searchkey(_input){
		this.searchRes(_input.value);
		this.router.navigate(['search', _input.value]);
		_input.value = '';
	}

}
