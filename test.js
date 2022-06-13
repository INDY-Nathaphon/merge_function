var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var collection_1 = [1, 2, 3];
var collection_2 = [4, 1, 5, 66];
function merge(a, b) {
    var _a;
    var output = [];
    output = __spreadArray(__spreadArray([], a, true), b, true);
    var states = true;
    for (var i = 0; i < output.length; i++) {
        if (states === true) {
            states = false;
            for (var j = 0; j < output.length - i; j++) {
                if (output[j] > output[j + 1]) {
                    _a = [output[j + 1], output[j]], output[j] = _a[0], output[j + 1] = _a[1];
                    states = true;
                }
            }
        }
        else {
            return output;
        }
    }
    return output;
}
console.log(merge(collection_1, collection_2));
