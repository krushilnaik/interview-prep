import { Interviewer } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Prep",
  description: "Prepare for technical interviews with coding challenges and algorithm practice.",
};

export default function TechnicalPrepPage() {
  return <Interviewer title={metadata.title as string} description={metadata.description as string} />;
}
