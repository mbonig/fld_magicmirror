System.register(['./app.po', 'protractor'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments)).next());
        });
    };
    var app_po_1, protractor_1;
    return {
        setters:[
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            },
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }],
        execute: function() {
            describe('workspace-project App', function () {
                var page;
                beforeEach(function () {
                    page = new app_po_1.AppPage();
                });
                it('should display welcome message', function () {
                    page.navigateTo();
                    expect(page.getTitleText()).toEqual('Welcome to newclient!');
                });
                afterEach(function () __awaiter(this, void 0, void 0, function* () {
                    // Assert that there are no errors emitted from the browser
                    var logs = yield protractor_1.browser.manage().logs().get(protractor_1.logging.Type.BROWSER);
                    expect(logs).not.toContain(jasmine.objectContaining({
                        level: protractor_1.logging.Level.SEVERE,
                    }));
                }));
            });
        }
    }
});
//# sourceMappingURL=app.e2e-spec.js.map