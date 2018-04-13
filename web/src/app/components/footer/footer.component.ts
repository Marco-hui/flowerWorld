import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpclientService } from '../../services/httpclient.service';
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	constructor(private com:CommonService,private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
	}
	items() {
		this.com.setItems = 't0';
        this.router.navigate(['items']);
	}
}
