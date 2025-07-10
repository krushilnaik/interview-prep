import { Interviewer } from "@/components";

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
      questionPrompt=""
      graderPrompt=""
    />
  );
}
