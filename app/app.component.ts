import {Component} from 'angular2/core';
import {WeatherComponent} from './weather';
import {CalendarComponent} from './calendar';
import {InspirationComponent} from './inspiration';

@Component({
    selector: 'magic-mirror',
    template: `<div class="magic-mirror">
                    <weather class="full-size">loading...</weather>
                    <calendar class="full-size"></calendar>
                    <inspiration class="full-size"></inspiration>
                </div>`,
    directives: [WeatherComponent, CalendarComponent, InspirationComponent],
    styles: [`
            .magic-mirror {
                display:flex;

                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;

                min-height: 95vh;
            }
            .magic-mirror .full-size{
                flex:1 1;
            }
        `
    ]
})
export class AppComponent {

}
