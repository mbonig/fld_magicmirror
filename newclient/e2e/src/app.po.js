System.register(['protractor'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var protractor_1;
    var AppPage;
    return {
        setters:[
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }],
        execute: function() {
            AppPage = (function () {
                function AppPage() {
                }
                AppPage.prototype.navigateTo = function () {
                    return protractor_1.browser.get(protractor_1.browser.baseUrl);
                };
                AppPage.prototype.getTitleText = function () {
                    return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
                };
                return AppPage;
            }());
            exports_1("AppPage", AppPage);
        }
    }
});
//# sourceMappingURL=app.po.js.map