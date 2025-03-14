"use client";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Nested = () => {
  const circle = useRef<HTMLDivElement>(null); // Type the ref to HTMLDivElement
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        rotation: "+=360",
        duration: 2, // Animation duration in seconds
        repeat: -1, // Makes the rotation repeat indefinitely
        ease: "linear", // Smooth linear animation
      });
    },
    { scope: container },
  );
  return (
    <div className="nested" ref={container}>
      <div className="box gradient-green p-6">Selector</div>
      <div ref={circle} className="gradient-blue p-6">
        Ref
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen items-center justify-center bg-gradient-to-br from-[#fffec2] to-[#f7e686] pt-16">
      <div className="text-slate-1000 flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="p-5 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Text-Split
        </h1>

        <Nested />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-x-48 md:gap-y-8">
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/60 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
