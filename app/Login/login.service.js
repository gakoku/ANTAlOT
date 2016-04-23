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
    var loginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            loginService = (function () {
                function loginService() {
                    this.alertMess = '';
                    this.alertUser = '';
                    this.alertPass = '';
                    this.username = '';
                    this.password = '';
                }
                loginService.prototype.chkUser = function () {
                    if (this.username != '') {
                        this.alertUser = '';
                        if (this.password != '') {
                            this.alertPass = '';
                        }
                        if (this.username == 'admin') {
                            if (this.password == 'admin') {
                                this.alertMess = '';
                            }
                        }
                        else {
                            this.alertMess = 'Username or Password INVALID';
                        }
                    }
                    else {
                        this.alertUser = 'Username is required';
                        if (this.alertPass == '') {
                            this.alertPass = 'Password is required';
                        }
                    }
                };
                loginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], loginService);
                return loginService;
            }());
            exports_1("loginService", loginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map