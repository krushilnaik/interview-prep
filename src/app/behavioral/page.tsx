import { Interviewer } from "@/components";
import { BEHAVIORAL_GRADER_PROMPT, BEHAVIORAL_INTERVIEW_PROMPT } from "@/utils/prompts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behavioral Prep",
  description: "Prepare for behavioral interviews with practice questions and tips.",
};

export default function BehavioralPrepPage() {
  return (
    <Interviewer
      title={metadata.title as string}
      description={metadata.description as string}
      questionPrompt={BEHAVIORAL_INTERVIEW_PROMPT}
      graderPrompt={BEHAVIORAL_GRADER_PROMPT}
    />
  );
}
