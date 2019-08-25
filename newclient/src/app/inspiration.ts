import { Component } from '@angular/core';
import { VerseService } from './votd.services';

@Component({
    selector: 'inspiration',
    template: `<div *ngIf="verse.length > 0">
                <p>{{verse[0].bookname}} {{verse[0].chapter}}</p>
                <p *ngFor="let v of verse">{{v.verse}}: {{v.text}}</p>
               </div>`,
    styles: [`
    p {
        font-size: 1.35rem
    }
        `],
    providers: [VerseService]
})
export class InspirationComponent {
    verse: [] = [];

    constructor(private verseService: VerseService) {
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
            .subscribe((data: []) => {
                if (data) {
                    console.log(data);
                    this.verse = data;
                }
            });
    }
}