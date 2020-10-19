import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss']
})
export class TabsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initTabs();
    //ERROR this.showCurrentTabContent(0, []);
  }

  initTabs() {
    const videoControls = document.querySelectorAll('video[controls]');
    console.log('videoControls')
    console.log(videoControls)
    const videosArray = Array.from(videoControls);
    console.log('videosArray')
    console.log(videosArray)
    //controls.classList.contains('active')
    
    const tabs = document.querySelectorAll('.c-tabs .c-tabs__item'); //.c-item
    const tabsArray = Array.from(tabs);
    const tabsContent = document.querySelectorAll('.c-tabs__content'); //.c-tabs-content
    const tabsContentArray = Array.from(tabsContent);
    
    // Initialize 1st tab
    this.showCurrentTabContent(0, []);

    document.querySelectorAll('.c-tabs .c-tabs__item a').forEach(function(element) { //.c-item
      element.addEventListener('click', function(e) {
        tabs.forEach(function(tab) {
          tab.classList.remove('is-active');
        });
  
        this.parentElement.classList.add('is-active');
        console.log(this.parentElement);
  
        var index = tabsArray.indexOf(this.parentElement);
        console.log(tabsArray.indexOf(this.parentElement));
        this.showCurrentTabContent(index, tabsContentArray);
      });
    });
  }

  showCurrentTabContent(index, tabsContentArray) {
    console.log(index)
    console.log(tabsContentArray)
    for(var i=0; i < tabsContentArray.length; i++) {
      tabsContentArray[i].style.display = "none";
      if(i == index) {
        tabsContentArray[i].style.display = "block";
      }
    }
  }

}
