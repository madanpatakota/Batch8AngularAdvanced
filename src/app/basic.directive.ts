
// Directives are classes that add new behavior or modify the existing behavior to the elements

import { Directive, ElementRef , OnInit } from "@angular/core";



@Directive({
  selector : '[basicColor]'
})

export class BasicColorDirective implements OnInit{

  constructor(private elementref : ElementRef){
  }

  ngOnInit(): void {
    // console.log("basic direcitve is " , this.elementref);
    this.elementref.nativeElement.style.background = 'green';
    this.elementref.nativeElement.style.color      = 'red';
  }




}
