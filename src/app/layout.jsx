import "./globals.css";
import { Rajdhani } from "next/font/google";
const rajd = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Satisguessry",
  description:
    "The most efficient, productive and Satisfactory geography guessing game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${rajd.className} min-h-dvh w-full flex justify-center bg-bg-main overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

//<Bg />
