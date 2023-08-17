import { Directive , 
    ElementRef ,
   OnInit , 
   Renderer2,
   Input , 
   HostBinding, 
   } from '@angular/core';

@Directive({
  selector: '[appAdvancedcolor]'
})
export class AdvancedcolorDirective implements OnInit {

  constructor(private elementref : ElementRef , private render : Renderer2 ) { }



  @Input('color') color : string;


  // Host binding is useful for set a property value on the host element.

  // @HostBinding("style.background-color")   hostbackgroundcolor : string;

  @HostBinding("style.color")   hostbackgroundcolor : string;

  ngOnInit(): void {
       //this.elementref.nativeElement.style.background = "yellow";  // you are applying the style by using HTML DOM 

      //  this.render.setStyle(this.elementref.nativeElement , 'background-color', 'yellow');


      //this.render.setStyle(this.elementref.nativeElement , 'background-color', this.color);

      this.hostbackgroundcolor  = this.color;

  }


}
