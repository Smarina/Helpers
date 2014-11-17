HTMLFormElement.prototype.serialize = function () {
    var slice = Array.prototype.slice;
    var inputs = slice.call(this.getElementsByTagName('input'));
    var selects = slice.call(this.getElementsByTagName('select'));
    while (selects.length)inputs.push(selects.pop());

    var json = {};
    for (var f = 0; f < inputs.length; f++) json[inputs[f].name] = inputs[f].value;

    var p = [];
    for (f in json)p.push(f + "=" + json[f]);
    return p.join('&');
};