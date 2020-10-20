import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss']
})
export class TabsComponentComponent implements OnInit {
  /* @Input() navsConfig: {id: string, name: string, title: string, content: string, videoURL: string, videoCaption: string};
  @Input() name: string;
  @Input() id: string; */
  navigationOptions: Object[] = [
    //Video
    {
      id: 'specs',
      name: 'Specifications',
      title: 'Overview',
      content: 'Microsoft Dynamics 365 Guides is a mixed-reality application for Microsoft HoloLens that lets operators learn during the flow of work by providing holographic instructions when and where they are needed. These instruction cards are visually tethered to the place where the work must be done, and can include images, videos, and 3D holographic models. Operators see what must be done, and where. Therefore, they can get the job done faster, with fewer errors and greater skill retention.',
      videoURL: '../../assets/video/antibodies.mp4', /* Specify that the row corresponding to the content of this navigation tab will need to be empty if there was the case that the visual content would not included an video, but an image. That would be specified in another field inside this object */
      videoCaption: 'Caption, video title, details, etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imgURL: '',
      imageCaption: ''
    },
    //Image
    {
      id: 'products',
      name: 'Related products',
      title: 'Overview 2',
      content: '2 Microsoft Dynamics 365 Guides is a mixed-reality application for Microsoft HoloLens that lets operators learn during the flow of work by providing holographic instructions when and where they are needed. These instruction cards are visually tethered to the place where the work must be done, and can include images, videos, and 3D holographic models. Operators see what must be done, and where. Therefore, they can get the job done faster, with fewer errors and greater skill retention.',
      videoURL: '',
      videoCaption: '',
      imgURL: 'sdsds',
      imageCaption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque molestias soluta a quidem, nihil atque! Et, dolorum? Id error minima eos, eveniet harum sunt, accusamus illum tempore sequi cumque rerum.'
    }
  ]
  constructor() { }
  ngOnInit(): void {
    //this.initTabs();
    //ERROR this.showCurrentTabContent(0, []);
    //this.initNavigationTabs();
  }
  initNavigationTabs(e) {
    const navItems = document.querySelectorAll(".c-nav__item");
    // Removes/Adds active class to current selected 
    //document.querySelectorAll(".c-nav__links a").forEach(function(element) {
      //element.addEventListener('click', function(e) {
        navItems.forEach(item => { //: Element
          item.classList.remove('c-nav--active');
          console.log('classlist');
          console.log(item.classList);
        });
        const currentActive = ( <HTMLElement>event.target ).parentElement;
        currentActive.classList.add('c-nav--active');
        console.log('currentActive.classList');
        console.log(currentActive.classList);
      //});
    //});
    // Make sticky nav menu
    window.onscroll = function() {makeSticky()};
     const header = document.querySelector('.c-nav');
    const sticky = (<HTMLElement>header).offsetTop;
    function makeSticky() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
        //console.log('removed')
      }
    }
  }
  /* initTabs() {
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
  } */
  /* showCurrentTabContent(index, tabsContentArray) {
    console.log(index)
    console.log(tabsContentArray)
    for(var i=0; i < tabsContentArray.length; i++) {
      tabsContentArray[i].style.display = "none";
      if(i == index) {
        tabsContentArray[i].style.display = "block";
      }
    }
  } */
}