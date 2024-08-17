"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo.svg";
import logoDark from "../../../public/img/logoDark.svg";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className="nav_logo">
      <Link href={"/"} className="">
        <Image
          src={theme == "light" ? logo : logoDark}
          alt="شعار عروض"
          width={159}
          height={60}
        />
      </Link>
    </div>
  );
}
