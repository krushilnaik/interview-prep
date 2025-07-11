export default function Home() {
  return (
    <div className="flex gap-8 h-full items-center justify-center">
      <a href="/behavioral" className="p-8 bg-blue-600 text-white rounded hover:bg-blue-500">
        Behavioral Prep
      </a>
      <a href="/technical" className="p-8 bg-green-600 text-white rounded hover:bg-green-500">
        Technical Prep
      </a>
    </div>
  );
}
