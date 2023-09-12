import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.viewContainer.clear();
      setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }, 2000);
    }, 2000);
  }
  

}
