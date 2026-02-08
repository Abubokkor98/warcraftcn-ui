import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/warcraftcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/warcraftcn/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 pb-3">
      <h1 className="sr-only">warcraftcn - Warcraft UI components</h1>

      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,171,1,0.5)_0%,rgba(255,171,1,0.3)_20%,rgba(82,214,252,0.25)_50%,transparent_75%)] blur-[100px]" />
      </div>

      <Card className="relative z-10 hidden min-h-180 max-w-xl md:block">
        <CardHeader className="text-white">
          <CardTitle className="text-center font-bold text-4xl">
            warcraftcn
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-2 pt-5">
          <Image
            alt="logo"
            height={300}
            src="/warcraftcn-logo.png"
            width={300}
          />
          <p className="text-center text-white">
            A set of components inspired by classic Warcraft III RTS UI
            aesthetics. Open source, copy paste ready. Works with your favorite
            frameworks. Fan made. No affiliation.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Link href="/docs">
            <Button className="text-xl" size="sm">
              Get Started
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <div className="fantasy z-10 flex h-screen max-w-sm flex-col items-center justify-center gap-5 md:hidden">
        <div className="flex flex-col items-center justify-center gap-5 rounded-md border bg-muted-foreground/50 p-5">
          <h2 className="font-bold text-2xl">warcraftcn</h2>
          <p className="text-center text-sm">
            A set of components inspired by classic Warcraft III RTS UI
            aesthetics. Open source, copy paste ready. Works with your favorite
            frameworks. Fan made. No affiliation.
          </p>
          <Link href="/docs">
            <Button className="text-xl" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
