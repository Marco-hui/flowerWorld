import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

	constructor() { }
	spinner_show:boolean = false;
    orderDataset:Object = {};
    orderman_show:Boolean = false;
    selectAddress_show:Boolean = false;
    editConsignee_show:Boolean = false;

    setItems: string = 't0';    
}
