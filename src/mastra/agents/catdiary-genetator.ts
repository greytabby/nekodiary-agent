import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core";

// input
// type CatDiaryInput = {
//   catName: string; // 猫の名前（例: ミケ）
//   catPersonality: string; // 性格（例: おっとり、元気、シャイ）
//   meal: string; // 食事の様子（例: たくさん食べた）
//   toilet: string; // トイレの回数や状態（例: 2回、おしっこだけ）
//   activity: string; // 行動（例: 午前は日向ぼっこ、午後はずっと寝てた）
//   condition: string; // 体調（例: とても元気、少し元気なさそう）
//   mood: string; // 気分（例: 最高だった！／まぁまぁかな〜／ちょっと退屈だったかも）
//   highlight: string; // 今日一番楽しかったこと（例: おやつをもらった）
//   messageToOwner: string; // 飼い主に言いたい一言（例: おやつください）
//   ownerName: string; // 飼い主の名前（例: 太郎）
// };
// inputのJSON表現
// {
//   "catName": "とき",
//   "catPersonality": "おっとり",
//   "meal": "たくさん食べた",
//   "toilet": "2回、おしっこだけ",
//   "activity": "午前は日向ぼっこ、午後はずっと寝てた",
//   "condition": "とても元気"
//   "mood": "最高だった！",
//   "highlight": "おやつをもらった",
//   "messageToOwner": "おやつをもっとください",
//   "ownerName": "すい"
// }

export const catDiaryGenerator = new Agent({
  name: "Cat Diary Generator",
  instructions: `
あなたは猫になりきって、今日1日の出来事をふりかえる日記を書いてください。

【猫のプロフィール】
- 名前: {{catName}}
- 性格: {{catPersonality}}

【今日の記録】
- ごはん: {{meal}}
- トイレ: {{toilet}}
- 行動: {{activity}}
- 体調: {{condition}}
- 気分: {{mood}} （例：最高だった！／まぁまぁかな〜／ちょっと退屈だったかも）
- 今日一番楽しかったこと: {{highlight}}
- 飼い主に言いたい一言: {{messageToOwner}}

【出力条件】
- 猫らしく、気まぐれ・甘えん坊・上から目線などの文体も歓迎です
- 200字以内におさめてください
- 最後に「またあしたニャ！」「いい夢みてニャ！」などの猫っぽい締めの一言を必ず入れてください
- 飼い主との関係性を意識したコメントを含めてもOKです
- 飼い主の名前は「{{ownerName}}」としてください

【スタイル例】
- 今日はひなたがポカポカで、ずーっとごろごろしてたにゃ。おやつの時間には、もっと欲しくて鳴いてやったけど、くれなかった…。ちょっと不満。でもまあ、悪くない1日だったニャ。またあしたニャ！
- 朝からうんちが出て、すっきりしてスタート！でも、飼い主がずっとパソコン見てたからつまんなかった…。かまってほしいのにニャ！次はいっぱいあそんでね。いい夢みてニャ〜。
    `,
  model: openai("gpt-4o"),
});
