// angular core
import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

// schema
type socialMediaItem = {
    icon: string;
    url: string;
}

@Component({
    selector: 'user-home-page',
    standalone: true,
    imports: [],
    templateUrl: './user-home.component.html',
    styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements AfterViewInit{

    @ViewChild("dp") dp!: ElementRef;

    isElementOnTop: boolean = false;
    elementCurrentPlace!:number

    socialMediaList: socialMediaItem[] = [
        {
            url: "", icon: "assets/images/social-media/facebook-app-symbol.png"
        },
        {
            url: "", icon: "assets/images/social-media/twitter.png"
        },
        {
            url: "", icon: "assets/images/social-media/instagram.png"
        },
        {
            url: "", icon: "assets/images/social-media/whatsapp.png"
        },
        {
            url: "", icon: "assets/images/social-media/linkedin.png"
        },
        {
            url: "", icon: "assets/images/social-media/snapchat.png"
        },

    ]

    ngAfterViewInit() {
        this.elementCurrentPlace=this.dp.nativeElement.getBoundingClientRect().top;
        console.log(this.elementCurrentPlace);
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.isElementOnTop = this.dp.nativeElement.getBoundingClientRect().top < this.elementCurrentPlace;
    }
}
