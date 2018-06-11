import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'videos',component:VideoCenterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoCenterComponent,
    VideoDetailComponent,
    VideoListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
