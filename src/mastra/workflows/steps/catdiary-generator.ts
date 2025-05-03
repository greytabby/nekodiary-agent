import { Step } from "@mastra/core";
import { z } from "zod";
import { catDiaryGenerator } from "../../agents/catdiary-genetator";

type catDiaryGeneratorInput = {
  catName: string;
  catPersonality: string;
  meal: string;
  toilet: string;
  activity: string;
  condition: string;
  mood: string;
  highlight: string;
  messageToOwner: string;
  ownerName: string;
}

export const CatDiaryGeneratorStep = new Step({
  id: "CatDiaryGeneratorStep",
  outputSchema: z.object({
    diaryText: z.string(),
  }),
  inputSchema: z.object({
    catName: z.string(),
    catPersonality: z.string(),
    meal: z.string(),
    toilet: z.string(),
    activity: z.string(),
    condition: z.string(),
    mood: z.string(),
    highlight: z.string(),
    messageToOwner: z.string(),
    ownerName: z.string(),
  }),
  execute: async ({ context }) => {
    const { catName, catPersonality, meal, toilet, activity, condition, mood, highlight, messageToOwner, ownerName } = context.triggerData;

    const message = `
    【猫のプロフィール】
    - 名前: ${catName}
    - 性格: ${catPersonality}

    【今日の記録】
    - ごはん: ${meal}
    - トイレ: ${toilet}
    - 行動: ${activity}
    - 体調: ${condition}
    - 気分: ${mood}
    - 今日一番楽しかったこと: ${highlight}
    - 飼い主に言いたい一言: ${messageToOwner}

    【飼い主の名前】  
    ${ownerName}
    `

    const result = await catDiaryGenerator.generate(
      [{ role: "user", content: message, }],
    )
    return {
      diaryText: result.text,
    }
  },
})
