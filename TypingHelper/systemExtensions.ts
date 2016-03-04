interface NodeList {
    toArray(): Array<Node>;
}
interface Element {
    _insertBefore(newElement: Element): void;
    _insertAfter(newElement: Element): void;
}
interface Array<T> {
    take(count: number): any[];
}
NodeList.prototype.toArray = function () {
    return this.filter(function (x) { return true; });
}
Element.prototype._insertBefore = function (newElement) {
    this.parentNode.insertBefore(newElement, this);
};
Element.prototype._insertAfter = function (newElement) {
    this.nextSibling._insertBefore(newElement);
};
Array.prototype.take = function (count: number): any[] {
    var result = [];
    for (var i = 0; i < count; i++) {
        var t = this.shift()
        if (!t) continue;
        result.push(t);
    }
    return result;
}
function parseHTML(HTMLString): HTMLDocument {
    return new DOMParser().parseFromString(HTMLString, "text/html");
}
function parseNode(HTMLString): Node {
    return parseHTML(HTMLString).body.childNodes.item(0);
}
function parseXML(XMLString): XMLDocument {
    return new DOMParser().parseFromString(XMLString, "text/xml");
}