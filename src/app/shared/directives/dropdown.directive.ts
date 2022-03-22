import { Directive, HostListener, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  isOpen = false;
  hostEl = this.elementRef.nativeElement;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onToggleClass(event: Event){
    event.stopPropagation(); //preventing to click the document
    this.toggleClass(); 
  }

  @HostListener('document:click', ['$event']) onDocToggleClass(event: Event){
    this.isOpen = false;
    this.renderer.removeClass(this.hostEl.nextSibling, 'show');
  }
  
  
  toggleClass(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){
      //this.renderer.addClass(hostEl.parentNode, 'show');
      this.renderer.addClass(this.hostEl.nextSibling, 'show');
    }else{
      //this.renderer.removeClass(hostEl.parentNode, 'show');
      this.renderer.removeClass(this.hostEl.nextSibling, 'show');
    }
  }

}
