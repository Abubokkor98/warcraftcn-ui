import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/warcraftcn/button";

export const metadata: Metadata = {
  title: "404 | warcraftcn",
};

export default function NotFound() {
  return (
    <div className="grid h-screen w-full place-content-center gap-5 bg-background px-4 text-center">
      <Image
        alt="Pixel Orc 404"
        height={300}
        src={"/404/pixel-orc.webp"}
        width={300}
      />

      <h1 className="font-bold text-2xl tracking-tight sm:text-4xl">Uh-oh!</h1>

      <p className="text-gray-500">You are lost.</p>
      <Link href={"/"}>
        <Button className="p-5 px-10" variant="frame">
          Return to Home Page
        </Button>
      </Link>
    </div>
  );
}
