import Image from "next/image";
import bg from "../../public/explore.webp";

const Bg = () => {
  return (
    <div className="absolute w-full h-full -z-10 brightness-[0.4] blur-xl">
      <Image
        alt="in-game image player holding crash-site scanner on it"
        src={bg.src}
        quality={1}
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Bg;
