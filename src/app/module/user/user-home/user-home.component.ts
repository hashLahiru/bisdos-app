// angular core
import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, RouterLink} from "@angular/router";
import {ProfileService} from "../../../core/services/profile.service";
import {ProfileResponse} from "../../../core/modals/profile.modal";
import {NgOptimizedImage} from "@angular/common";

// schema
type socialMediaItem = {
    icon: string;
    url: string;
}

@Component({
    selector: 'user-home-page',
    standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage
    ],
    templateUrl: './user-home.component.html',
    styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit, AfterViewInit {

    @ViewChild("dp") dp!: ElementRef;

    public isElementOnTop: boolean = false;
    public profileData!:ProfileResponse;
    public socialMediaList: socialMediaItem[] = [
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

    private elementCurrentPlace!: number

    constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) {
    }

    ngOnInit(): void {
        this.getData();
    }

    ngAfterViewInit(): void {
        this.elementCurrentPlace = this.dp.nativeElement.getBoundingClientRect().top;
        console.log(this.elementCurrentPlace);
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        this.isElementOnTop = this.dp.nativeElement.getBoundingClientRect().top < this.elementCurrentPlace;
    }

    private getData(): void {
        this.activatedRoute.paramMap.subscribe({
            next: (params:ParamMap):void => {
                const id = params.get('id')
                if (id != null) {
                    this.profileService.getActiveUserProfileById(parseInt(id)).subscribe({
                        next:(data:ProfileResponse):void=>{
                            this.profileData=data;
                        },
                        error:(er):void=>{
                            console.error(er)
                        }
                    })
                }
            },
            error: (er):void => {
                console.error(er)
            }
        })
    }
}
