export const buildGrader = (question: string, answer: string, prompt: string) => {
  return prompt.replace("{{question}}", question).replace("{{answer}}", answer);
};
