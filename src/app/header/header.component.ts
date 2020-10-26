import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CsvDataService } from '../shared/services/csv-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navOptions: Array<String> = []; 
  showSubMenu: boolean = false;
  //csvHeader = [];
  csvHeader: Array<Array<string>> = [];
  constructor(
    private csvService: CsvDataService) {} 
  ngOnInit() {
    this.navOptions = [];
    this.csvService.emitData$.pipe(
      // Serves as unsubscribe & limits the number of emissions of the suscription -- add more to test the extractData() methos inside csv-data.service setTimeout 
      take(1)
    ).subscribe((serviceData) => {
      console.log('Header service data: '); //
      this.csvHeader = this.clearData(serviceData);
      console.log(this.csvHeader);
    });
  }
  clearData(csvArr) { //: Array<Array<string>>
    /* console.log('csvArr');
    console.log(csvArr); */
    //const clearArray =  csvArr.filter(arr => arr.length);
    /* const clearArray =  csvArr.filter(arr => {
      arr != null && arr != "";
      console.log(arr);
    }); */
    //REMOVE empty array from Array 
    let filteredData = csvArr.filter( el => { //return
      return (el != null && el != "");
    });
    return filteredData;
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
}











