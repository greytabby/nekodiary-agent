import { Step } from "@mastra/core";
import { z } from "zod";
import { highlightExtractor } from "../../agents/highlight-extractor";
import { CatDiaryGeneratorStep } from "./catdiary-generator";

export const HighlightExtractorStep = new Step({
  id: "HighlightExtractor",
  inputSchema: z.object({
    diaryText: z.string(),
  }),
  outputSchema: z.object({
    highlight: z.string(),
  }),
  execute: async ({ context }) => {
    const diaryText = context.getStepResult(CatDiaryGeneratorStep)?.diaryText;

    const result = await highlightExtractor.generate(
      [{ role: "user", content: diaryText, }],
    )
    return {
      highlight: result.text,
    }
  },
});
