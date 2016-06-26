import {Component} from 'angular2/core';
import {VerseService} from './votd.services';

@Component({
    selector: 'inspiration',
    template: `<div>
                <p>{{verse[0].bookname}} {{verse[0].chapter}}</p>
                <p *ngFor="#v of verse">{{v.verse}}: {{v.text}}</p>
               </div>`,
    providers: [VerseService]
})
export class InspirationComponent {
    verse:Object;

    constructor(private verseService:VerseService) {
        this.verseService = verseService;
        this.verse = [];
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