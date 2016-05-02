System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var factoryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            factoryListComponent = (function () {
                function factoryListComponent() {
                }
                factoryListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div id=\"dashboard\">\n\t\t\t<table class=\"uk-table\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td class='uk-width-9-10'></td>\n\t\t\t\t\t<td class='uk-width-1-10'>\n\t\t\t\t\t\t<button id='AddBtn' class=\"uk-button uk-button-large uk-button-primary \" data-uk-modal=\"{target:'#AddBox'}\" type=\"button\">\n\t\t\t\t\t\t\tADD\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<table id='card' class=\"uk-table\" style='border: 1px solid;'>\n\t\t\t\t<tr>\n\t\t\t\t\t<td class='uk-width-8-10 uk-text-middle'>\n\t\t\t\t\t\t<p class='uk-text-primary uk-text-bold uk-text-center uk-h1'>\n\t\t\t\t\t\t\t\tFactory 1\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class='uk-width-2-10 uk-text-middle uk-text-center'>\n\t\t\t\t\t\t<div class=\"uk-button-group\">\n    \t\t\t\t\t\t<button class=\"uk-button uk-button-large\" data-uk-modal='{target:\"#EditBox\"}'>\n    \t\t\t\t\t\t\tEDIT\n    \t\t\t\t\t\t</button>\n    \t\t\t\t\t\t<button class=\"uk-button uk-button-large\">\n    \t\t\t\t\t\t\tDELETE\n    \t\t\t\t\t\t</button>\n    \t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n      <div id=\"AddBox\" class=\"uk-modal\">\n        <div class=\"uk-modal-dialog\">\n          <a class=\"uk-modal-close uk-close\"></a>\n          <div class=\"uk-modal-header\">\n            <form class=\"uk-form\">\n              <h3>\n                NAME : <input type=\"text\" placeholder=\"FACTORY NAME\">\n              </h3>\n              <h3>\n                ADDRESS : <textarea cols=\"25\" rows=\"\" placeholder=\"ADDRESS\"></textarea>\n              </h3>\n              <h3>\n                MEMBER\n                <button class=\"uk-button uk-button-mini uk-button-success \" type=\"button\">\n                  +\n                </button>\n              </h3>\n              <h3>\n                1 :\n                <input type=\"text\" placeholder=\"MEMBER NAME\">\n              </h3>\n            </form>\n          </div>\n          <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-large uk-button-primary \" type=\"button\">\n              ADD\n            </button>\n          </div>\n        </div>\n      </div>\n      <div id=\"EditBox\" class=\"uk-modal\">\n        <div class=\"uk-modal-dialog\">\n          <a class=\"uk-modal-close uk-close\"></a>\n          <h1>Test</h1>\n          <p>Test Dialog</p>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], factoryListComponent);
                return factoryListComponent;
            }());
            exports_1("factoryListComponent", factoryListComponent);
        }
    }
});
//# sourceMappingURL=factory-list.js.map