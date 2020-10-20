import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navOptions: Array<String> = []; 
  showSubMenu: boolean = false;
  /* navsContent = [
    {
      id: 'specs',
      name: 'Specifications',
      title: 'Overview',
      content: 'Microsoft Dynamics 365 Guides is a mixed-reality application for Microsoft HoloLens that lets operators learn during the flow of work by providing holographic instructions when and where they are needed. These instruction cards are visually tethered to the place where the work must be done, and can include images, videos, and 3D holographic models. Operators see what must be done, and where. Therefore, they can get the job done faster, with fewer errors and greater skill retention.',
      videoURL: 'SDFG',
      videoCaption: 'Caption, video title, details, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'products',
      name: 'Related products',
      title: 'Overview 2',
      content: '2 Microsoft Dynamics 365 Guides is a mixed-reality application for Microsoft HoloLens that lets operators learn during the flow of work by providing holographic instructions when and where they are needed. These instruction cards are visually tethered to the place where the work must be done, and can include images, videos, and 3D holographic models. Operators see what must be done, and where. Therefore, they can get the job done faster, with fewer errors and greater skill retention.',
      videoURL: 'SDFG',
      videoCaption: '2 Caption, video title, details, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ] */
  ngOnInit() {
    this.navOptions = [];
    // Navigation tabs
    //this.initNavigationTabs();
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
  /* initNavigationTabs() {
    console.log('tabs start')
    document.querySelectorAll(".c-nav__links a").forEach(function(element) {
      element.addEventListener('click', function(e) {
        document.querySelectorAll(".c-nav__item").forEach(function(item) { //: Element
          console.log('classlist');
          console.log(item.classList);
          console.log(item.classList.remove('c-nav--active'));
        });
        console.log('e')
        console.log(e)
        //<Element>e.currentTarget.parentNode.classList.add('c-nav--active');
        const currentActive = ( <HTMLElement>event.target ).parentElement;
        currentActive.classList.add('c-nav--active');
        console.log(currentActive.classList)
      });
    });
  } */
}