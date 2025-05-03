
import { Mastra } from '@mastra/core';
import { catDiaryGenerator } from './agents/catdiary-genetator';
import { highlightExtractor } from './agents/highlight-extractor';
import { catDiaryWorkflow } from './workflows';

export const mastra = new Mastra({
  agents: {
    catDiaryGenerator,
    highlightExtractor,
  },
  workflows: {
    catDiaryWorkflow,
  },
})
