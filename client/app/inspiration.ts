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
        this.getVotd();

        var twelveHours = 12 * 60 * 60 * 1000;
        var _this = this;
        var doTheTimeout = function () {
            setTimeout(function () {
                _this.getVotd();
                doTheTimeout()
            }, twelveHours);

        };
        doTheTimeout();

    }

    getVotd() {
        console.log('getting the votd');
        this.verseService.getVerse()
            .map(res=>res.json())
            .subscribe(data=> {
                this.verse = data;
            });
    }
}