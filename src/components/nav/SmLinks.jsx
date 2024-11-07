import Link from "next/link";

const SmLinks = ({ children, href }) => {
  return (
    <li>
      <Link
        className="text-slate-100 *:size-8 w-full hover:text-main-yellow transition-colors"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  );
};

export default SmLinks;
