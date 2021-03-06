import { Component, OnInit } from '@angular/core';
import { CsvDataService } from './shared/services/csv-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bannerTitle: string; // 'Guides'
  navOptions: Array<String> = []; 
  showSubMenu: boolean = false;
  constructor(private csvService: CsvDataService) {
  }
  ngOnInit() {
    this.navOptions = [];
  }
  navOptionClicked(e) {
    if(!this.navOptions.length){
      /* console.log('this.navOptions')
      console.log(this.navOptions.length) */
      const selectedOptions = e.target.nextSibling.children;
      const currentOptions: Element[] =  Array.from(selectedOptions); // HTMLElement
      console.log(currentOptions)
      for(var i=0; i < currentOptions.length; i++) {
        this.navOptions.push(currentOptions[i].innerHTML);
        //console.log(this.navOptions)
      }
    } else {
      this.navOptions = []; 
      this.navOptionClicked(e); 
      //console.log(this.navOptions)
    }
    const activeDropdown = e.target.nextSibling
    const subMenu = document.querySelector('.submenu-container'); //[0]
    if (!activeDropdown.classList.contains('show')) { // nextSibling: div.dropdown-menu.show
      /* console.log('active')
      console.log(activeDropdown.classList) */
      this.showSubMenu = true;
      //subMenu.setAttribute('style', 'color: red;');
    } else {
      /* console.log('NOT active')
      console.log(activeDropdown.classList) */
      subMenu.setAttribute('style', 'display: none');
      this.showSubMenu = false;
    }
  }
  toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
