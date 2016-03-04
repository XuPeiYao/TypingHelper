module TypingHelper {
    "use strict";
    export class HttpClient {
        public async downloadJSONAsync(url: string): Promise<JSON> {
            var str = await this.downloadStringAsync(url);
            return JSON.parse(str);
        }

        public async downloadStringAsync(url: string): Promise<string> {
            return new Promise<string>((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== 4) return;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.open('GET', <string>url, true);
                xhr.send();
            });
        }
    }
}