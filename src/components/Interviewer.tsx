interface Props {
  title: string;
  description: string;
}

function Interviewer({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-1 items-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>Press spacebar to generate a new question</p>
    </div>
  );
}

export default Interviewer;
