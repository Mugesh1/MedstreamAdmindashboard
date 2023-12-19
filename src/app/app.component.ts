import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SplashScreenService } from './splash-screen/splash-screen.service';
import { NavigationStart, Router } from '@angular/router';
interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screenWidth = 0;
  isSideNavCollapsed = false;
  hide=true;
  show: boolean;
  constructor(private splashScreenService: SplashScreenService,private router:Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/auth/login') {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
     this.hide=false;
    }, 3000);
    this.splashScreenService.hide()
  }
  onTogglesideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
