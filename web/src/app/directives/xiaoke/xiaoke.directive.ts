import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  	selector: '[xiaoke]'
})
export class XiaokeDirective {

	constructor(el: ElementRef) { 
	}
	// @HostListener('scroll',['$event']) onscroll(e){
	// 	console.log(e.target.scrollTop)
	// 	let top = e.target.scrollTop;
	// 	if(top > 1100){
	// 		console.log(e.target)
	// 	}else{
	// 		// $(e.target).fadeIn();
	// 	}
	// }
	@HostListener('click',['$event']) onclick(e){
		$('#lclist').animate({ //添加animate动画效果  
            scrollTop: 0  
        }, 500); 
	}
}
