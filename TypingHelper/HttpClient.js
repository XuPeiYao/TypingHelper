var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var TypingHelper;
(function (TypingHelper) {
    "use strict";
    class HttpClient {
        downloadJSONAsync(url) {
            return __awaiter(this, void 0, Promise, function* () {
                var str = yield this.downloadStringAsync(url);
                return JSON.parse(str);
            });
        }
        downloadStringAsync(url) {
            return __awaiter(this, void 0, Promise, function* () {
                return new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState !== 4)
                            return;
                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(xhr.responseText);
                        }
                        else {
                            reject(xhr.statusText);
                        }
                    };
                    xhr.open('GET', url, true);
                    xhr.send();
                });
            });
        }
    }
    TypingHelper.HttpClient = HttpClient;
})(TypingHelper || (TypingHelper = {}));
//# sourceMappingURL=HttpClient.js.map