define(function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var Mirror = require("../worker/mirror").Mirror;

    // antlr grammar
    require('./antlr/antlrLsfJSLogics');

    var LSFWorker = exports.LSFWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
    };

    oop.inherits(LSFWorker, Mirror);

    (function () {
        this.onUpdate = function () {
            var value = this.doc.getValue();
            var annotations = antlrLSFValidate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(LSFWorker.prototype);
});
