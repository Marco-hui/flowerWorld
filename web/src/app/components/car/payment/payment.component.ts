import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router'

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

    constructor(private route:ActivatedRoute,private router:Router) { }
    total:Numner;

    goToBack(){
        this.router.navigate(['/car'])
    }

    ngOnInit() {
        this.total = this.route.snapshot.paramMap.get('total');
    }

}
