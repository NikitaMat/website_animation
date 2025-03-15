"use client";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap-trial";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { SplitText } from "gsap-trial/SplitText";
import TextPlugin from "gsap-trial/TextPlugin";
import { Fullscreen } from "lucide-react";

gsap.registerPlugin(TextPlugin, SplitText);

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

const SplitT = () => {
  const hero = useRef<HTMLDivElement>(null);
  const quote = useRef<HTMLDivElement>(null);
  const quote2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mySplitText = new SplitText(quote.current, { type: "words" });
    const spHeroText = new SplitText(quote2.current, { type: "words" });
    const splitTextTimeline = gsap.timeline();

    gsap.set(quote.current, { perspective: 400 });
    const kill = () => {
      splitTextTimeline.clear().time(0);
      mySplitText.revert();
      spHeroText.revert();
    };
    const wordsHandler = () => {
      kill();
      mySplitText.split({ type: "words" });
      mySplitText.words.forEach((el, index) => {
        splitTextTimeline.from(
          el,
          { duration: 2, opacity: 0, force3D: true },
          index * 0.01,
        );
      });
    };
    spHeroText.split({ type: "words" });
    splitTextTimeline.from(
      quote2.current,

      {
        duration: 2,
        opacity: 0,
        y: 30, // Text kommt von unten
        ease: "expo.out",
      },
    );

    // Event-Listener hinzufügen (wird durch useGSAP verwaltet)
    const wordsButton = document.getElementById("words");
    wordsButton?.addEventListener("click", wordsHandler);

    // Cleanup: Entfernen des Event-Listeners bei Unmount der Komponente
    return () => {
      wordsButton?.removeEventListener("click", wordsHandler);
    };
  }, []); // Der Effekt wird nur einmal beim Initialisieren ausgeführt

  return (
    <div className="items-center justify-center px-4">
      <div className="hero" ref={hero}>
        <h1
          className="pb-5 text-5xl font-extrabold tracking-tight sm:text-[5rem]"
          ref={quote}
        >
          {" "}
          Text Split !
        </h1>
        <p className="pl-2 text-2xl" ref={quote2}>
          Willkommen zu Text Spaltungen
        </p>
      </div>
      <div className="mt-6 grid w-full grid-cols-2 items-end justify-end align-middle">
        <button
          className="w-40 rounded-full border p-3 hover:fill-white"
          id="words"
        >
          Learn More
        </button>
        <button
          className="w-40 rounded-full border p-3 hover:bg-white hover:duration-700"
          id="words"
        >
          Now Do it!
        </button>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen items-center justify-center bg-gradient-to-br from-[#ffffff] to-[#2b1f58] pt-16">
      <div className="text-slate-1000 flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-x-48 md:gap-y-8">
          <SplitT />
          <Image
            src="/women_training.jpg"
            alt="Training"
            width={520}
            height={600}
          />
          <Link
            className="flex max-w-xl flex-col gap-4 rounded-xl bg-white/60 p-4 hover:bg-white/20"
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
            className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
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
            className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
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
            className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
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
            className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
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
            className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
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
