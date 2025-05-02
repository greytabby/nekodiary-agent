
import { Mastra } from '@mastra/core';
import { catDiaryGenerator } from './agents/catdiary-genetator';

export const mastra = new Mastra({
  agents: {
    catDiaryGenerator,
  },
})
