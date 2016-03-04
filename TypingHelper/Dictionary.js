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
    class Dictionary {
        constructor() {
            this.maxLength = 0;
        }
        query(keyword) {
            return this.database.filter(x => x.substring(0, Math.min(keyword.length, x.length)) === keyword && x !== keyword);
        }
        static getInstance() {
            return __awaiter(this, void 0, Promise, function* () {
                var result = new Dictionary();
                var client = new TypingHelper.HttpClient();
                var apiData = yield client.downloadStringAsync("https://www.moedict.tw/a/index.1.json");
                apiData += yield client.downloadStringAsync("https://www.moedict.tw/a/index.2.json");
                apiData = JSON.parse(apiData);
                result.database = apiData;
                result.database.forEach(x => result.maxLength = Math.max(result.maxLength, x.length));
                return result;
            });
        }
    }
    TypingHelper.Dictionary = Dictionary;
})(TypingHelper || (TypingHelper = {}));
//# sourceMappingURL=Dictionary.js.map