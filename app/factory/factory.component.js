System.register(['angular2/core', 'angular2/router', '../sensor/sensor.component', './factory-list'], function(exports_1, context_1) {
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
    var core_1, router_1, sensor_component_1, factory_list_1;
    var factoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sensor_component_1_1) {
                sensor_component_1 = sensor_component_1_1;
            },
            function (factory_list_1_1) {
                factory_list_1 = factory_list_1_1;
            }],
        execute: function() {
            factoryComponent = (function () {
                function factoryComponent(_router) {
                    this._router = _router;
                }
                factoryComponent.prototype.gotoFact = function () {
                    this._router.navigate(['FactoryList']);
                };
                factoryComponent.prototype.gotoSensor = function () {
                    this._router.navigate(['Sensor']);
                };
                factoryComponent = __decorate([
                    core_1.Component({
                        template: "\n      <div>\n        <div id=\"header\">\n    \t\t\t\t<table class=\"uk-width-1-1\">\n    \t\t\t\t\t<td align='center' style='width:25%;'>\n    \t\t\t\t\t\t<div>\n    \t\t\t\t\t\t\t\t<img class=\"uk-margin-bottom\" width=\"100px\" height=\"100px\" src=\"images/logo.png\" alt=\"FACLOGO\">\n    \t\t\t\t\t\t\t</div>\n    \t\t\t\t\t</td>\n    \t\t\t\t\t<td style='width:50%;'>\n    \t\t\t\t\t\t<div align=\"center\">\n                <div data-uk-button-radio>\n                  <a class=\"uk-button\" selected (click)=\"gotoFact()\">Factory</a>\n                  <a class=\"uk-button\" (click)=\"gotoSensor()\">Sensor</a>\n                </div>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t</td>\n    \t\t\t\t\t<td style='width:25%;'>\n    \t\t\t\t\t\t<div>\n    \t\t\t\t\t\t\t<div align='center'>\n    \t\t\t\t\t\t\t\t<pre>Welcome, admin <a href=\"#\">logout</a></pre>\n    \t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t</td>\n    \t\t\t\t</table>\n    \t\t</div>\n          <router-outlet></router-outlet>\n      </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'FactoryList',
                            component: factory_list_1.factoryListComponent,
                            useAsDefault: true
                        },
                        { path: '/sensor', name: 'Sensor', component: sensor_component_1.sensorComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], factoryComponent);
                return factoryComponent;
            }());
            exports_1("factoryComponent", factoryComponent);
        }
    }
});
//# sourceMappingURL=factory.component.js.map