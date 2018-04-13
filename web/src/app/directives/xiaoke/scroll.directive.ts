import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery'
@Directive({
 	selector: '[onScroll]'
})
export class ScrollDirective {

	constructor(el: ElementRef) { }
	@HostListener('scroll',['$event']) onscroll(e){
		let top = e.target.scrollTop;
		let rem = 800 / 37.5;
		let fs = Number($('html').css('fontSize').replace(/[^0-9]/ig, ""))/2;
		if(top > fs*rem){
			$('.gotopBtn').fadeIn()
		}else{
			$('.gotopBtn').fadeOut()
		}
	}
}
