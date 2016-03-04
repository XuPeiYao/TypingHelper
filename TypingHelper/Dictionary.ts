module TypingHelper {
    "use strict";
    export class Dictionary {
        private database: string[];
        public maxLength : number = 0;
        public query(keyword: string): string[] {
            
            return this.database.filter(x => x.substring(0, Math.min(keyword.length, x.length)) === keyword && x !== keyword);
        }

        public static async getInstance(): Promise<Dictionary> {
            var result = new Dictionary();
            var client = new HttpClient();
            var apiData: any  = await client.downloadStringAsync("https://www.moedict.tw/a/index.1.json");
            apiData += await client.downloadStringAsync("https://www.moedict.tw/a/index.2.json");
            apiData = JSON.parse(apiData);
            result.database = apiData;
            result.database.forEach(x => result.maxLength = Math.max(result.maxLength, x.length));
            return result;
        }
    }
}