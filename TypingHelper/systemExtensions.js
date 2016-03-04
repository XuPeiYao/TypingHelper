NodeList.prototype.toArray = function () {
    return this.filter(function (x) { return true; });
};
Element.prototype._insertBefore = function (newElement) {
    this.parentNode.insertBefore(newElement, this);
};
Element.prototype._insertAfter = function (newElement) {
    this.nextSibling._insertBefore(newElement);
};
Array.prototype.take = function (count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        var t = this.shift();
        if (!t)
            continue;
        result.push(t);
    }
    return result;
};
function parseHTML(HTMLString) {
    return new DOMParser().parseFromString(HTMLString, "text/html");
}
function parseNode(HTMLString) {
    return parseHTML(HTMLString).body.childNodes.item(0);
}
function parseXML(XMLString) {
    return new DOMParser().parseFromString(XMLString, "text/xml");
}
//# sourceMappingURL=systemExtensions.js.map