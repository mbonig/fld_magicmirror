System.register(['angular2/core', './votd.services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, votd_services_1;
    var InspirationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (votd_services_1_1) {
                votd_services_1 = votd_services_1_1;
            }],
        execute: function() {
            InspirationComponent = (function () {
                function InspirationComponent(verseService) {
                    this.verseService = verseService;
                    this.verseService = verseService;
                    this.verse = [];
                }
                InspirationComponent.prototype.ngAfterContentInit = function () {
                    this.getVotd();
                    var twelveHours = 12 * 60 * 60 * 1000;
                    var _this = this;
                    var doTheTimeout = function () {
                        setTimeout(function () {
                            _this.getVotd();
                            doTheTimeout();
                        }, twelveHours);
                    };
                    doTheTimeout();
                };
                InspirationComponent.prototype.getVotd = function () {
                    var _this = this;
                    console.log('getting the votd');
                    this.verseService.getVerse()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.verse = data;
                    });
                };
                InspirationComponent = __decorate([
                    core_1.Component({
                        selector: 'inspiration',
                        template: "<div>\n                <p>{{verse[0].bookname}} {{verse[0].chapter}}</p>\n                <p *ngFor=\"#v of verse\">{{v.verse}}: {{v.text}}</p>\n               </div>",
                        providers: [votd_services_1.VerseService]
                    }), 
                    __metadata('design:paramtypes', [votd_services_1.VerseService])
                ], InspirationComponent);
                return InspirationComponent;
            }());
            exports_1("InspirationComponent", InspirationComponent);
        }
    }
});
//# sourceMappingURL=inspiration.js.map