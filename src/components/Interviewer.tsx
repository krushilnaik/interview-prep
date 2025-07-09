"use client";

import { useKeyPress } from "@/hooks";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

interface Props {
  title: string;
  description: string;
}

function Interviewer({ title, description }: Props) {
  const [question, setQuestion] = useState("question goes here");
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useKeyPress(" ", () => {
    const newQuestion = `New question at ${new Date().toTimeString()}`;
    setQuestion(newQuestion);
  });

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-1 items-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p className="italic">{question}</p>
      <p>Press spacebar to generate a new question</p>
      <div>
        <p className="italic">Listening: {listening ? "Yes" : "No"}</p>
        <button onClick={() => SpeechRecognition.startListening()}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default Interviewer;
