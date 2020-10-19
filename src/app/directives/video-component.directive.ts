import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appVideoComponentDirective]'
})

export class VideoComponentDirective implements OnInit {
    constructor(private ElementRef: ElementRef) {}

    ngOnInit() {
        console.log(this.ElementRef)
        this.ElementRef.nativeElement.style.visibility = 'visible';
    }    
}