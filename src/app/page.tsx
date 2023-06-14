import Link from "next/link";
import React from "react";
import Particles from "@/app/components/particles";

const navigation = [
  { name: "Projects", href: "/projects", key: 1 },
  { name: "Contact", href: "/contact", key: 2 },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <Link href='/projects' as='projects' className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Projects</Link>
          <Link href='/contact' as='contact' className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">Contact</Link>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="p-4 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          P. Pilatso
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-300">
            Hi, my name is Phenyo Pilatso. I am a software developer, specializing in
            frontend/web development.
        </h2>
      </div>
    </div>
  );
}
