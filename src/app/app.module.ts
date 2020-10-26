import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { VideoComponentComponent } from './video-component/video-component.component';
import { VideoComponentDirective } from './directives/video-component.directive';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TabsComponentComponent,
    VideoComponentComponent,
    VideoComponentDirective,
    StoriesComponent,
    FooterComponent,
    SummaryComponent,
    HeaderComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
