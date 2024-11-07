import Link from "next/link";

const Header = ({ children, className }) => {
  return (
    <Link href="/" className={className}>
      {children}
    </Link>
  );
};

export default Header;
