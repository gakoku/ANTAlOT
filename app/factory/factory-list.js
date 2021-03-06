System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var factoryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            factoryListComponent = (function () {
                function factoryListComponent(_router) {
                    this._router = _router;
                    this.factName = "Factory 1";
                    this.address = "126 ถนน ประชาอุทิศ แขวง บางมด เขต ทุ่งครุ กรุงเทพมหานคร 10140";
                    this.member1 = "John Smith";
                    this.member2 = "Adam Potter";
                }
                factoryListComponent.prototype.goToMachine = function () {
                    this._router.navigate(['Machine']);
                };
                factoryListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>\n      <!-- HeaderTab -->\n      <table class=\"uk-table\">\n        <tr>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box-primary'>\n            <div  class='uk-width-1-1'>\n              <h2 class='uk-text-middle'>FACTORY</h2>\n            </div>\n          </td>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box'>\n            <div>\n              <h2>MACHINE</h2>\n            </div>\n          </td>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box-secondary'>\n            <div>\n              <h2>ANT</h2>\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <!-- DASHBOARD -->\n    <div id=\"dashboard\">\n\t\t\t<table class=\"uk-table\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td class='uk-width-9-10'></td>\n\t\t\t\t\t<td class='uk-width-1-10'>\n\t\t\t\t\t\t<button id='AddBtn' class=\"uk-button uk-button-large uk-button-primary \" data-uk-modal=\"{target:'#AddBox'}\" type=\"button\">\n\t\t\t\t\t\t\tADD\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n      <!-- DATA -->\n      <div>\n        <table class='uk-table'>\n          <tr>\n            <td class='uk-width-3-10'>\n              <div class='uk-text-center uk-panel uk-panel-box'>\n                <a (click)='goToMachine()'>\n                  FactoryName\n                </a>\n                <a>\n                  <div class='uk-panel-badge uk-badge'>\n                    X\n                  </div>\n                </a>\n              </div>\n              <div class='uk-text-middle uk-text-center uk-panel uk-panel-box uk-panel-box-secondary'>\n                Graph Data\n              </div>\n            </td>\n            <td class='uk-width-3-10'>\n              <div class='uk-text-center uk-panel uk-panel-box'>\n                <a (click)='goToMachine()'>\n                  FactoryName\n                </a>\n                <a>\n                  <div class='uk-panel-badge uk-badge'>\n                    X\n                  </div>\n                </a>\n              </div>\n              <div class='uk-text-middle uk-text-center uk-panel uk-panel-box uk-panel-box-secondary'>\n                Graph Data\n              </div>\n            </td>\n            <td class='uk-width-3-10'>\n              <div class='uk-text-center uk-panel uk-panel-box'>\n                <a (click)='goToMachine()'>\n                  FactoryName\n                </a>\n                <a>\n                  <div class='uk-panel-badge uk-badge'>\n                    X\n                  </div>\n                </a>\n              </div>\n              <div class='uk-text-middle uk-text-center uk-panel uk-panel-box uk-panel-box-secondary'>\n                Graph Data\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <!-- POPUP BOX -->\n      <!-- AddBox -->\n      <div id=\"AddBox\" class=\"uk-modal\">\n        <div class=\"uk-modal-dialog\">\n          <a class=\"uk-modal-close uk-close\"></a>\n          <div class=\"uk-modal-header\">\n            <form class=\"uk-form\">\n              <h3>\n                NAME : <input type=\"text\" placeholder=\"FACTORY NAME\">\n              </h3>\n              <h3>\n                ADDRESS : <textarea cols=\"25\" rows=\"\" placeholder=\"ADDRESS\"></textarea>\n              </h3>\n              <h3>\n                DESCRIPTION : <textarea cols=\"25\" rows=\"\" placeholder=\"DESCRIPTION\"></textarea>\n              </h3>\n            <div class=\"uk-modal-footer uk-text-right\">\n              <button class=\"uk-button uk-button-large uk-button-primary \" type=\"button\">\n                ADD\n              </button>\n            </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- EditBox -->\n      <div id=\"EditBox\" class=\"uk-modal\">\n        <div class=\"uk-modal-dialog\">\n          <a class=\"uk-modal-close uk-close\"></a>\n          <form class=\"uk-form\">\n            <h3>\n              NAME : <input [(ngModel)]=\"factName\" type=\"text\" placeholder=\"FACTORY NAME\">\n            </h3>\n            <h3>\n              ADDRESS : <textarea cols=\"25\" rows=\"\" [(ngModel)]=\"address\" placeholder=\"ADDRESS\"></textarea>\n            </h3>\n            <h3>\n              MEMBER\n              <button class=\"uk-button uk-button-mini uk-button-success \" type=\"button\">\n                +\n              </button>\n            </h3>\n            <h3>\n              1 :\n              <input [(ngModel)]=\"member1\" type=\"text\" placeholder=\"MEMBER NAME\">\n              <button class=\"uk-button uk-button-mini uk-button-danger \" type=\"button\">\n                -\n              </button>\n            </h3>\n            <h3>\n              2 :\n              <input [(ngModel)]=\"member2\" type=\"text\" placeholder=\"MEMBER NAME\">\n              <button class=\"uk-button uk-button-mini uk-button-danger \" type=\"button\">\n                -\n              </button>\n            </h3>\n          <div class=\"uk-modal-footer uk-text-right\">\n            <button class=\"uk-button uk-button-large uk-button-primary \" type=\"button\">\n              EDIT\n            </button>\n          </div>\n          </form>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], factoryListComponent);
                return factoryListComponent;
            }());
            exports_1("factoryListComponent", factoryListComponent);
        }
    }
});
//# sourceMappingURL=factory-list.js.map