import { timerOptions } from "@/constants/timerOptions";
import { useGameSettingsStore } from "@/stores/gameSettingsStore";
import { useShallow } from "zustand/react/shallow";

const TimerOptions = () => {
  const duration = useGameSettingsStore(useShallow((state) => state.duration));
  const setDuration = useGameSettingsStore((state) => state.setDuration);

  return (
    <div className="flex w-full justify-between text-[2rem] relative">
      <p className="sr-only">Choose round time limit</p>
      <span className="italic absolute -top-6 left-1 z-10 text-sm bg-main-yellow text-bg-main px-2 font-bold shadow-lg">
        in seconds
      </span>
      {timerOptions.map((option) => (
        <button
          key={option}
          onClick={() => setDuration(option)}
          className={`flex-1 bg-main-yellow tabular-nums
            ${
              option === duration
                ? "brightness-100 font-bold"
                : "brightness-50 hover:brightness-75"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TimerOptions;
