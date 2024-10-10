import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-20">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Julian{" "}
        </span>
        <span>| shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link className="mx-3" href="/">
        Privacidad & Legal
      </Link>
      <Link className="mx-3" href="/">
        Ubicaciones
      </Link>
    </div>
  );
};
