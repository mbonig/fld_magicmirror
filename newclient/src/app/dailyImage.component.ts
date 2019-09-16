import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from './image.service';

const ONE_HUNDRED_SECONDS = 100000;
@Component({
    selector: 'iotd',
    template: `<div *ngIf="source$|async as source">
    <img *ngIf="!source.url.endsWith('.mp4')" [src]="source.url"/>
    <video #video *ngIf="source.url.endsWith('.mp4')" loop="" class="" style="max-width: 100%; max-height: 440px;" autoplay="">
    <source type="video/mp4" [src]="source.url"></video>
    </div>
    `,
    providers: [ImageService],
    styles: [`
       :host{
           text-align: center;
           display: block;
       } 
       div {
           overflow-y: hidden;
           margin: -1rem;
       }
       img {
           margin-left: auto;
           margin-right: auto;
           width: auto;
           max-height:100vh;
       }
    `]
})

export class DailyImage implements OnInit {
    source$: any = Promise.resolve({ url: "https://i.imgur.com/gH1RWUd.jpg" });
    constructor(private imageService: ImageService) {

    }

    @ViewChild('video', { static: false }) video: ElementRef;

    async ngOnInit() {
        setInterval(async () => {
            this.source$ = await this.imageService.getImage();
        }, ONE_HUNDRED_SECONDS);
        
        setInterval(() => {
            if (this.video.nativeElement.paused) {
                this.video.nativeElement.play();

            }
        }, 1000);
        this.source$ = await this.imageService.getImage();
    }
}