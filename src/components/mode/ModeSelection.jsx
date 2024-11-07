import ModeItem from "./ModeItem";
import { modes } from "@/constants/modes";
import StartGameBtn from "@/components/StartGameBtn";

const ModeSelection = () => {
  return (
    <>
      <fieldset className="max-w-5xl grid grid-cols-2 w-full relative">
        {modes.map((mode, index) => (
          <ModeItem
            string={mode.string}
            display={mode.display}
            key={mode.id}
            id={mode.id}
            bgURL={mode.bgURL}
            index={index}
          />
        ))}
      </fieldset>
      <StartGameBtn />
    </>
  );
};

export default ModeSelection;
