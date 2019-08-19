System.register(['@angular/core/testing', '@angular/router/testing', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, app_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('AppComponent', function () {
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        imports: [
                            testing_2.RouterTestingModule
                        ],
                        declarations: [
                            app_component_1.AppComponent
                        ],
                    }).compileComponents();
                }));
                it('should create the app', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app).toBeTruthy();
                });
                it("should have as title 'newclient'", function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    var app = fixture.debugElement.componentInstance;
                    expect(app.title).toEqual('newclient');
                });
                it('should render title in a h1 tag', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    fixture.detectChanges();
                    var compiled = fixture.debugElement.nativeElement;
                    expect(compiled.querySelector('h1').textContent).toContain('Welcome to newclient!');
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map