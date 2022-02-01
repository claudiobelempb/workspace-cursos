"use strict";
var Pemission;
(function (Pemission) {
    Pemission[Pemission["ADMIN"] = 1] = "ADMIN";
    Pemission["USER"] = "USER";
    Pemission["READONLY"] = "READONLY";
})(Pemission || (Pemission = {}));
console.log(Pemission.ADMIN);
console.log(Pemission.USER);
console.log(Pemission["READONLY"]);
