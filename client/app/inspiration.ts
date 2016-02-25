import {Component} from 'angular2/core';
import {VerseService} from './votd.services';

@Component({
    selector: 'inspiration',
    template: `<div>
                <p>{{verse?.contents?.verse}}</p>
                <p>{{verse?.contents?.book}} {{verse?.contents?.chapter}}:{{verse?.contents?.number}}</p>
               </div>`,
    providers: [VerseService]
})
export class InspirationComponent {
    verse:Object;

    constructor(private verseService:VerseService) {
        this.verseService = verseService;
    }

    ngAfterContentInit() {
        this.verseService.getVerse()
            .map(res=>res.json())
            .subscribe(data=> {
                this.verse = data;
            });
    }
}