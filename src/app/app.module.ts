import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { VideoComponentDirective } from './directives/video-component.directive';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TabsComponentComponent,
    VideoComponentComponent,
    VideoComponentDirective,
    StoriesComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
