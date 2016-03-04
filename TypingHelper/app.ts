async function Init() {
    var dict = await TypingHelper.Dictionary.getInstance();
    var fbinput = <HTMLTextAreaElement>document.querySelector("textarea");
    fbinput.onkeyup = function () {
        resultView.innerHTML = "";
        if (this.value == null || this.value.length == 0) return;
        var result = [];
        for (var i = 0; i < this.value.length; i++) {
            var keyword = this.value.substring(i);
            if (keyword.length > dict.maxLength || keyword.length > 4) continue;

            result = result.concat(dict.query(keyword).map(function (x) {
                return { keyCount : keyword.length, value: x };
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
            }
            resultView.appendChild(link);
        })
        
    }
    
}
var inputBan = document.getElementById("js_p").querySelector('[class="_2pt"]');
inputBan._insertBefore(<Element>parseNode("<div id='TypingHelper'></div>"));
var resultView = document.getElementById("TypingHelper");
Init();