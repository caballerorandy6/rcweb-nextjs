import Link from "next/link";
import { usePathname } from "next/navigation";

const SocialLink = ({ children, href, prefetch }) => {
  const pathName = usePathname();

  if (href === pathName) {
    return (
      <Link href={href} prefetch={prefetch} className="text-donkeybrown">
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      target="_blank"
      className="relative group hover:text-bitter"
    >
      {children}
    </Link>
  );
};

export default SocialLink;
