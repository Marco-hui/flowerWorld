import { Component,OnInit,Input } from '@angular/core';
import { CommonService } from '../../../../services/common.service'
import * as $ from 'jquery'

@Component({
  selector: 'orderman',
  templateUrl: './orderman.component.html',
  styleUrls: ['./orderman.component.scss']
})
export class OrdermanComponent implements OnInit {

  constructor(private com:CommonService) { }

  @Input() user:Object;

  goToBack(e,phone){
    if(phone){
        if(!/^1[34579][\d]{9}$/.test(phone.value)){
            $("#orderman .hint").fadeIn().text('手机号格式不正确！');
            setTimeout(function(){
                $("#orderman .hint").fadeOut('slow');
            },2000)
            return;
        }
    }
    this.com.orderman_show = false;
  }

  ngOnInit(){}

}
