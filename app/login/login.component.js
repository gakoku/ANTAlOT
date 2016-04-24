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
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            loginComponent = (function () {
                function loginComponent(_router) {
                    this._router = _router;
                    this.alertMess = '';
                    this.alertUser = '';
                    this.alertPass = '';
                    this.username = '';
                    this.password = '';
                }
                loginComponent.prototype.chkUser = function () {
                    this.alertMess = '';
                    if (this.username != '') {
                        this.alertUser = '';
                        if (this.password != '') {
                            this.alertPass = '';
                        }
                        else {
                            this.alertPass = 'Password is required';
                        }
                        if (this.username == 'admin') {
                            if (this.password == 'admin') {
                                this.alertMess = '';
                                //this._router.navigate(['Factory']);
                                window.location.assign("factory");
                            }
                        }
                        else {
                            if (this.username != 'admin' && this.username != '' && this.password != 'admin' && this.password != '') {
                                this.alertMess = 'Username or Password INVALID';
                            }
                        }
                    }
                    else {
                        this.alertUser = 'Username is required';
                        if (this.password == '') {
                            this.alertPass = 'Password is required';
                        }
                        else {
                            this.alertPass = '';
                        }
                    }
                };
                loginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'view/login.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], loginComponent);
                return loginComponent;
            }());
            exports_1("loginComponent", loginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map