"use client";
import { useGameSettingsStore } from "@/stores/gameSettingsStore";
import Link from "next/link";

const StartGameBtn = () => {
  const mode = useGameSettingsStore((state) => state.mode);

  return (
    <>
      {mode === null ? (
        <span
          className={`text-bg-main grayscale bg-main-yellow bg-repeat-x bg-contain px-8 py-3 text-5xl font-bold leading-none brightness-[0.25]`}
        >
          START THE GAME
        </span>
      ) : (
        <Link
          href="/game"
          className={`text-bg-main bg-[url('/pattern.png')] bg-repeat-x bg-contain px-8 py-3 text-5xl font-bold leading-none transition-all hover:shadow-[0_0_1rem_rgba(242,196,0,1)] active:shadow-[0_0_0.5rem_rgba(242,196,0,1)]`}
        >
          <p>START THE GAME</p>
        </Link>
      )}
    </>
  );
};

export default StartGameBtn;
