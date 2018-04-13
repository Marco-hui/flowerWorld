import { Component, OnIni } from '@angular/core';
import { HttpclientService } from '../../../../services/httpclient.service'
import { CommonService } from '../../../../services/common.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {

    constructor(private http:HttpclientService,private com:CommonService, private router: Router) { }

    // 定义变量
    consigDataset:Array<any>;
    selectedConsig:Object;
    userid = null;
    consigOneMsg:Object;

    // trackBy调用函数
    byName(idx,obj){
        return idx;
    }
    goToBack(){
        history.go(-1)
    }
    showEditConsignee(e,obj){
        this.consigOneMsg={};
        if(obj) this.consigOneMsg=obj;
        this.com.editConsignee_show = true;
    }
    updateSelected(newAddress){
        if(newAddress) this.selectedConsig = newAddress;
        this.com.spinner_show = true;
        this.http.get('MgetAddress',{userid:this.userid}).then(res=>{
           this.com.spinner_show = false;
           this.consigDataset = res.data;
        })
    }
    delAddress(e,id){
        this.http.post('MdelAddress',{id}).then(res=>{
            if(res["status"]){
                $(e.target).closest('li').remove();
            }
        })
    }
    updateAddress(id,defaults){
        this.com.spinner_show = true;
        this.http.post('MupdateAddress',{id,userid:this.userid,defaults}).then(res=>{
            this.com.spinner_show = false;
            if(res["status"]){
                this.consigDataset.forEach(item=>{
                    if(item.defaults){
                        item.defaults = null;
                    }
                    if(item.id == id){
                        item.defaults = 1;
                    }
                })
            }
        })
    }
    selectAddress(obj){
        this.selectedConsig = obj;
        window.sessionStorage.setItem("newAddress",JSON.stringify(obj));
        this.router.navigate(['/car/sendinfo'])
    }

    ngOnInit() {
        this.userid = window.sessionStorage.getItem('userID');
        var newAddress = JSON.parse(window.sessionStorage.getItem("newAddress"));
        if(newAddress) this.selectedConsig = newAddress;
        this.com.spinner_show = true;
        this.http.get('MgetAddress',{userid:this.userid}).then(res=>{
            this.com.spinner_show = false;
            this.consigDataset = res["data"];
            res["data"].forEach(item=>{
                if(item.defaults){
                    this.selectedConsig = newAddress || item;
                }
            })
        })
    }

}
