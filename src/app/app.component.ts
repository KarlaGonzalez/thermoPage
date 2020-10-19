import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navOptions: Array<String> = [];  
  
  navOptionClicked(e) {
    if(!this.navOptions.length){
      console.log(e.target.nextSibling.children);
      const selectedOptions = e.target.nextSibling.children;
      const currentOptions: Element[] =  Array.from(selectedOptions); // HTMLElement
      console.log(currentOptions)
      console.log(currentOptions.length)
  
      for(var i=0; i < currentOptions.length; i++) {
        // console.log(currentOptions[i].innerHTML)
        this.navOptions.push(currentOptions[i].innerHTML);
        console.log(this.navOptions)
      }
    } /* else {
      console.log('array not empty')
      console.log(this.navOptions)
      // this.navOptions = [];  
    } */
    
  }


}

