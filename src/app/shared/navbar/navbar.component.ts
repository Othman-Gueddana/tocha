import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    loggedIn: boolean = false;
    constructor(public location: Location, private element: ElementRef, public translate: TranslateService,  private router: Router) {

        this.sidebarVisible = false;
        translate.addLangs(['english', 'francais', 'عربي']);
        translate.setDefaultLang('english');
    }
    ngOnInit() {}
    ngAfterContentChecked() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (localStorage.getItem('status') === 'logged') {
            this.loggedIn = true;
          }else 
           this.loggedIn = false;
    }

    clearStorage() {
        localStorage.clear();
        this.router.navigateByUrl('/home');
      }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    sidebarClose(){
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    // isHome() {
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 1 );
    //   }
    //     if( titlee === '/home' ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // isDocumentation() {
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 1 );
    //   }
    //     if( titlee === '/documentation' ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }


    switchLang(lang: string) {
        this.translate.use(lang);
    }
  
    }
