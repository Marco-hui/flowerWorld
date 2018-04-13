import { Directive,ElementRef } from '@angular/core';

@Directive({
	selector: '[imgload]'
})
export class ImgloadDirective {

	constructor(el: ElementRef) { 
		var img = el.nativeElement;
		var max = 2000;
		var min = 900;
		img.onload = function(){
			setTimeout(()=>{
				this.setAttribute('src', img.dataset.imgload);
			},Math.random()*(max-min+1)+min)
		}
	}

}
