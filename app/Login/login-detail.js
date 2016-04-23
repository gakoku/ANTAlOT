System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var loginDetail;
    return {
        setters:[],
        execute: function() {
            loginDetail = (function () {
                function loginDetail() {
                    this.alertMess = '';
                    this.alertUser = '';
                    this.alertPass = '';
                    this.username = '';
                    this.password = '';
                }
                loginDetail.prototype.chkUser = function () {
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
                return loginDetail;
            }());
            exports_1("loginDetail", loginDetail);
        }
    }
});
//# sourceMappingURL=login-detail.js.map