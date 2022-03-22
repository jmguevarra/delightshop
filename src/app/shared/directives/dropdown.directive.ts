import { Directive, HostListener, Renderer2, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  isOpen = false;
  hostEl = this.elementRef.nativeElement;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.listen(this.hostEl.parentNode, 'mouseleave', function(){
    //   this.isOpen = !this.isOpen;
    //   this.renderer.removeClass(this.hostEl.nextSibling, 'show');
    // });
  }

  @HostListener('click') onToggleClass(){
    this.toggleClass(); 
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
