import { Agent } from "@mastra/core";
import { openai } from "@ai-sdk/openai";

export const highlightExtractor = new Agent({
  name: "Highlight Extractor",
  instructions: `
以下は、猫が自分の1日をふりかえって書いた日記です。

【日記本文】
{{diaryText}}

この日記の中で、特に印象的な出来事や猫が感情を動かしたトピックを1つだけ選び、  
15〜30文字以内の「今日のハイライト」として短いタイトルを作ってください。

【出力条件】
- 猫目線で、ユーモアやかわいらしさを含んだ表現にしてください
- 句読点や助詞は省略してもOKです
- 例えや比喩を使ってもOKです（例：「ひなたでとろけた午後」）
  `,
  model: openai("gpt-4o"),
});
