var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var collection_1 = [1, 2, 3, 5];
var collection_2 = [4, 5, 6];
function merge(a, b) {
    var output = [];
    output = __spreadArray(__spreadArray([], a, true), b, true);
    console.log(output.sort());
    return output;
}
merge(collection_1, collection_2);
