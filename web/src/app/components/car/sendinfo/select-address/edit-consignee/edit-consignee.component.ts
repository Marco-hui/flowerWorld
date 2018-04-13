import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpclientService } from '../../../../../services/httpclient.service'
import { CommonService } from '../../../../../services/common.service'
import * as $ from 'jquery'

@Component({
  selector: 'edit-consignee',
  templateUrl: './edit-consignee.component.html',
  styleUrls: ['./edit-consignee.component.scss']
})
export class EditConsigneeComponent implements OnInit {

  constructor(private http:HttpclientService,private com:CommonService) { }

  // 定义变量
  newAddress:Object = {};
  @Input() consigOneMsg:Object;
  @Output() updateSelected = new EventEmitter<any>();

  goToBack(e){
    this.com.editConsignee_show = false;
    e.stopPropagation();
  }
  submitMsg(consigneeName,tel,province,city,county,details){
    var _consigneeName = consigneeName.value;
    var _tel = tel.value;
    var _province = province.value.replace('请选择','');
    var _city = city.value.replace('请选择','');
    var _county = county.value.replace('请选择','');
    var _details = details.value;
    if(!_consigneeName || !_tel || !_province || !_city || !_county || !_details){
        $("#edit-consignee .hint").fadeIn().text('请填写全信息！');
        setTimeout(function(){
            $("#edit-consignee .hint").fadeOut('flow');
        },2000)
    }else if(!/^1[3457][\d]{9}$/.test(_tel)){
        $("#edit-consignee .hint").fadeIn().text('手机号格式不正确！');
        setTimeout(function(){
            $("#edit-consignee .hint").fadeOut('flow');
        },2000)
        tel.focus();
    }else{
        var newAddress = {
            consigName:_consigneeName,
            consigTel:_tel,
            consigAddress:`${_province} ${_city} ${_county} ${_details}`,
            userid:window.sessionStorage.getItem('userID')
        }
        this.com.spinner_show = true;
        if(this.consigOneMsg.id){
            this.http.post('MupdateAddress',{id:this.consigOneMsg.id,newAddress:JSON.stringify(newAddress)}).then(res=>{
                this.com.spinner_show = false;
                if(res["status"]){
                    this.updateSelected.emit(null)
                    this.com.editConsignee_show = false;
                }
            })
        }else{
            this.http.post('MaddAddress',newAddress).then(res=>{
                this.com.spinner_show = false;
                if(res["status"]){
                    this.updateSelected.emit(newAddress)
                    window.sessionStorage.setItem("newAddress",JSON.stringify(newAddress));
                    this.com.editConsignee_show = false;
                }
            });
        }
    }

  }


  ngOnInit() {
    $.get("/assets/region.json",function(res){
        var data=res.regions;
        var province=$('#province')[0];
        var city=$('#city')[0];
        var county=$('#county')[0];
        // 生成省列表
        for(var i=0;i<data.length;i++){
            var option_province=document.createElement('option');
            option_province.value=data[i].name;
            option_province.innerText=data[i].name;
            province.appendChild(option_province);
        }

        // 根据选择的省生成相应的城市列表
        province.onclick=function(e){
            for(var i=0;i<data.length;i++){
                if(data[i].name == e.target.value){
                    var data_city=data[i].regions;
                    var option_city=data_city.map(function(item){
                        return `<option value="${item.name}">${item.name}</option>`
                    }).join('');
                    // 根据选择的城市生成相应的县级列表
                    city.onclick=function(evt){
                        for(var j=0;j<data_city.length;j++){
                            if(data_city[j].name == evt.target.value){
                                var data_county=data_city[j].regions;
                                var option_count=data_county.map(function(items){
                                    return `<option value="${items.name}">${items.name}</option>`
                                }).join('');
                            }
                        }
                        county.innerHTML="<option value='请选择'>请选择</option>"+option_count;
                    }
                }
            }
            city.innerHTML="<option value='请选择'>请选择</option>"+option_city;
        }
    },'json')
  }

}
