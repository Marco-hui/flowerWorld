import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[lazy]'
})
export class LazyDirective {

  constructor(el : ElementRef) {
        var img = el.nativeElement;
        img.onload = function(){
            setTimeout(()=>{
                if(img.dataset.img){
                    img.setAttribute("src", img.dataset.img);
                }
            }, 2000);
        }
   }

}
