import ModeSelection from "@/components/mode/ModeSelection";
import Link from "next/link";

const PlayPage = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-8 select-none">
      <Link
        href="/"
        className="text-bg-main *:size-10 bg-main-yellow rounded-full shadow-2xl p-2 flex items-center justify-center absolute top-8 left-8 hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-undo-2"
        >
          <path d="M9 14 4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
        </svg>
        <span className="sr-only">Back to Main Menu</span>
      </Link>

      <h1 className="text-5xl text-main-yellow font-bold leading-none">
        Choose a Game Mode!
      </h1>

      <ModeSelection />
    </main>
  );
};

export default PlayPage;
