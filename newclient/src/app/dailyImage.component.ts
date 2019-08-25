import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

@Component({
    selector: 'iotd',
    template: `<img [src]="(source | async)?.url"/>`,
    providers: [ImageService],
    styles: [`
       :host{
           text-align: center;
       } 
       img {
           margin-left: auto;
           margin-right: auto;
           width: auto;
           max-height:100%;
       }
    `]
})

export class DailyImage implements OnInit {
    constructor(private imageService: ImageService){

    }
    async ngOnInit(){
        this.source = await this.imageService.getImage();
    }
    source : any = Promise.resolve({url: "https://i.imgur.com/gH1RWUd.jpg"});
}