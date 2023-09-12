import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex align-bottom justify-around items-center h-40 bg-black opacity-95">
      <nav className="flex items-center relative gap-2 mx-4">
        <div>
          <Link href="https://github.com/caballerorandy6" target="_blank">
            <Image
              src="/github.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </div>

        <div>
          <Link href="https://linkedin.com/in/caballerorandy" target="_blank">
            <Image
              src="/linkedin.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </div>

        <div>
          <Link href="https://twitter.com/caballerorandy6" target="_blank">
            <Image
              src="/twitter.png"
              width={25}
              height={25}
              alt="github image"
              priority
            />
          </Link>
        </div>
      </nav>

      <div className="flex flex-col mt-8">
        <p className="text-slate-200 text-center text-xs font-semibold">
          Developed with
        </p>
        <Image
          src="/nextjs.png"
          width={100}
          height={0}
          alt="github image"
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <p className="text-slate-200 text-center text-xs font-semibold">
        {`© ${new Date().getFullYear()}  All rights reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
