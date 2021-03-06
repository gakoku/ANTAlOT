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
    var sensorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            sensorComponent = (function () {
                function sensorComponent(_router) {
                    this._router = _router;
                    this.senName = "Sensor 1";
                    this.senIp = "169.168.1.1";
                    this.senDesc = "Temperature Sensor";
                }
                sensorComponent.prototype.goToMachine = function () {
                    this._router.navigate(['Machine']);
                };
                sensorComponent.prototype.goToFactory = function () {
                    this._router.navigate(['FactoryList']);
                };
                sensorComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>\n      <!-- HeaderTab -->\n      <table class=\"uk-table\">\n        <tr>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box'>\n            <a (click)='goToFactory()'>\n              <div  class='uk-width-1-1'>\n                <h2 class='uk-text-middle'>FACTORY</h2>\n              </div>\n            </a>\n          </td>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box-secondary'>\n            <a (click)='goToMachine()' class='uk-text-middle'>\n              <div>\n                <h2>MACHINE</h2>\n              </div>\n            </a>\n          </td>\n          <td class='uk-width-1-3 uk-text-center uk-panel-box uk-panel-box-primary'>\n            <div>\n              <h2>ANT</h2>\n            </div>\n          </td>\n        </tr>\n      </table>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], sensorComponent);
                return sensorComponent;
            }());
            exports_1("sensorComponent", sensorComponent);
        }
    }
});
//# sourceMappingURL=sensor.component.js.map