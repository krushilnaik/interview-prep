"use client";

import { useKeyPress } from "@/hooks";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

interface Props {
  title: string;
  description: string;
  questionPrompt: string;
  graderPrompt: string;
}

function Interviewer({ title, description, questionPrompt, graderPrompt }: Props) {
  const [question, setQuestion] = useState("question goes here");
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [start, setStart] = useState(Date.now());
  const [stop, setStop] = useState(Date.now());
  const [countdown, setCountdown] = useState(-1);

  const generateQuestion = async () => {
    await fetch("http://localhost:1234/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: questionPrompt }],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const question = data.choices[0].message.content;
        setQuestion(question);
      })
      .catch(() => {
        setQuestion(`simulate question at date ${new Date().toLocaleTimeString()}`);
      });
  };

  const startCountdown = () => {
    resetTranscript();
    setCountdown(5);

    let int = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          setStart(Date.now());
          SpeechRecognition.startListening();
          clearInterval(int);

          // Reset countdown
          return -1;
        }

        return prev - 1;
      });
    }, 1000);
  };

  // triggers a new question
  useKeyPress(" ", () => {
    generateQuestion().then(startCountdown);
  });

  // user has finished speaking
  useKeyPress("s", () => {
    SpeechRecognition.stopListening();
    setStop(Date.now());
  });

  return (
    <div className="flex flex-col items-center justify-evenly gap-8 h-full">
      <div className="flex flex-col gap-4 items-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p className="italic">{question}</p>
      <div className="flex flex-col gap-2 text-center italic">
        <p>{countdown !== -1 ? `Listening in ${countdown} second(s)` : "Idle"}</p>
        <p>Listening: {listening ? "Yes (press 's' to stop)" : "No"}</p>
        <p>Press spacebar to generate a new question</p>
        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default Interviewer;
