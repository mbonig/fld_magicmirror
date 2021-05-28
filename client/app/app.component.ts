import {Component} from 'angular2/core';
import {WeatherComponent} from './weather';
import {CalendarComponent} from './calendar';
import {InspirationComponent} from './inspiration';

@Component({
    selector: 'magic-mirror',
    template: `<div class="magic-mirror">
                    <weather class="full-size">loading...</weather>
                    <inspiration class="full-size"></inspiration>
                    
                </div>`,
    directives: [WeatherComponent, CalendarComponent, InspirationComponent],
    styles: [`
            .magic-mirror {
                display:flex;
                flex-direction: column;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;

                min-height: 95vh;
                font-size: 2rem;
            }
            .magic-mirror .full-size{
                width: 90vw;
               
                overflow: hidden;
            }
            inspiration {
                min-height: 20vh;
            }
           
        `
    ]
})
export class AppComponent {

}
