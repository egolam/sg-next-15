"use client";

import Image from "next/image";
import TimerOptions from "./TimerOptions";
import { useGameSettingsStore } from "@/stores/gameSettingsStore";
import { useShallow } from "zustand/react/shallow";

const ModeItem = ({ string, display, bgURL, index, id }) => {
  const mode = useGameSettingsStore(useShallow((state) => state.mode));
  const setMode = useGameSettingsStore((state) => state.setMode);

  return (
    <label
      htmlFor={string}
      onClick={() => setMode(id)}
      className={`aspect-square cursor-pointer relative transition-all ${
        mode === id ? "" : "grayscale"
      }`}
    >
      <input type="radio" name="mode" id={string} className="sr-only" />
      <Image
        src={bgURL}
        alt={display}
        className="brightness-95"
        width={1080}
        height={1080}
        unoptimized
      />
      <div className="absolute bottom-0 w-full flex flex-col">
        <span
          className={`px-4 py-2 w-fit text-bg-main bg-main-yellow leading-none font-bold text-[3rem] self-end mr-4 mb-4 transition-shadow ${
            mode === id &&
            "shadow-[0.25rem_0.25rem_1rem_rgba(17,20,22,1)] bg-repeat-x bg-contain bg-[url('/pattern.png')]"
          }`}
        >
          {display}
        </span>
        {index === 1 && mode === 1 && <TimerOptions />}
      </div>
    </label>
  );
};

export default ModeItem;
