import Link from "next/link";

const NavLink = ({ children, href }) => {
  return (
    <li className="text-[2rem] text-slate-100 sm:w-[28rem]">
      <Link
        href={href}
        className="flex items-center gap-4 px-8 py-3 w-full bg-repeat-x bg-contain hover:bg-[url('/pattern.png')] hover:font-semibold hover:text-bg-main hover:tracking-wider transition-all"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
