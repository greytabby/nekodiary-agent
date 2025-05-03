import { Workflow } from "@mastra/core";
import { z } from "zod";
import { CatDiaryGeneratorStep } from "./steps/catdiary-generator";
import { HighlightExtractorStep } from "./steps/highlight-extractor";

export const catDiaryWorkflow = new Workflow({
  name: "Cat Diary Workflow",
  triggerSchema: z.object({
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
});

catDiaryWorkflow.step(CatDiaryGeneratorStep).then(HighlightExtractorStep).commit();