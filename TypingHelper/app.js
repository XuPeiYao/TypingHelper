var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
function Init() {
    return __awaiter(this, void 0, void 0, function* () {
        var dict = yield TypingHelper.Dictionary.getInstance();
        var fbinput = document.querySelector("textarea");
        fbinput.onkeyup = function () {
            resultView.innerHTML = "";
            if (this.value == null || this.value.length == 0)
                return;
            var result = [];
            for (var i = 0; i < this.value.length; i++) {
                var keyword = this.value.substring(i);
                if (keyword.length > dict.maxLength || keyword.length > 4)
                    continue;
                result = result.concat(dict.query(keyword).map(function (x) {
                    return { keyCount: keyword.length, value: x };
                }));
            }
            console.log(result);
            var targetWord = result.take(5);
            targetWord.forEach(x => {
                var link = document.createElement("a");
                link.innerText = x.value;
                link.style.marginLeft = "6px";
                link.onclick = function () {
                    var newText = fbinput.value.substring(0, fbinput.value.length - x.keyCount) + x.value;
                    fbinput.value = newText;
                    fbinput.focus();
                    fbinput.onkeyup(null);
                };
                resultView.appendChild(link);
            });
        };
    });
}
var inputBan = document.getElementById("js_p").querySelector('[class="_2pt"]');
inputBan._insertBefore(parseNode("<div id='TypingHelper'></div>"));
var resultView = document.getElementById("TypingHelper");
Init();
//# sourceMappingURL=app.js.map