import Header from "@/components/Header";
import NavLink from "@/components/nav/NavLink";
import SmLinks from "@/components/nav/SmLinks";
import { navLinks } from "@/constants/navLinks";
import { smLinks } from "@/constants/smLinks";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col gap-16 py-8">
        <Header className="text-slate-100 font-extrabold text-6xl pl-8">
          SATIS<span className="text-main-yellow">GUESSR</span>Y
        </Header>
        <nav className="h-full">
          <ul className="h-full flex flex-col [&>*:nth-child(4)]:mt-auto">
            {navLinks.map((link) => (
              <NavLink key={link.id} href={link.href}>
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </main>
      <div className="max-w-lg justify-between flex flex-col gap-8 py-8">
        <aside className="text-2xl flex flex-col gap-8 bg-bg-main/60 p-8 rounded-l-lg drop-shadow-lg border-r-4 border-main-yellow">
          <h2 className="text-slate-100 font-bold leading-tight">
            WELCOME TO <span className="text-main-yellow">SATISGUESSRY</span>
          </h2>
          <p className="border-l-2 pl-4 border-main-yellow text-slate-100 italic">
            Greetings fellow Pioneer!
          </p>
          <p className="text-slate-100">
            This program is designed to test your eidetic memory. If you believe
            in your previous experience of exploitation, please continue and see
            whether you are an{" "}
            <span className="text-green-500">Employee of the planet</span> or a
            big
            <span className="text-red-500"> disappointment...</span>
          </p>
        </aside>
        <footer className="bg-bg-main/60 rounded-l-lg px-8 py-4 drop-shadow-lg border-r-4 border-main-yellow">
          <ul className="flex gap-8">
            {smLinks.map((link) => (
              <SmLinks href={link.href} key={link.srName}>
                {link.icon}
                <p className="sr-only">{link.srName}</p>
              </SmLinks>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
}
