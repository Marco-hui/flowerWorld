import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../../../services/httpclient.service'
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'mallorder',
    templateUrl: './mallorder.component.html',
    styleUrls: ['./mallorder.component.scss']
})
export class MallorderComponent implements OnInit {

    arrgoods: Array = [];
    arr: Array = [];
    ids: string = '';

    constructor(private http: HttpclientService,private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        if(window.sessionStorage.getItem('xxtoken')){
            this.http.post('qallorder',{id:window.sessionStorage.getItem('userID')}).then((res)=>{              
                this.arrgoods = res.data;
            })
        }else{
            this.router.navigate(['/login']);
        }
        
    }

}
