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
    <div className="gird-col-3 grid max-w-xl items-center justify-center">
      <div className="hero" ref={hero}>
        <h1
          className="pb-8 text-4xl font-extrabold leading-none tracking-tight sm:text-[5rem]"
          ref={quote}
        >
          Fitness Anastasia!
        </h1>
        <p className="pl-2 text-2xl text-black" ref={quote2}>
          Ich mache dich jetzt FIT du kleine SAU!
        </p>
      </div>
      <div className="justify relative mt-6 flex items-start gap-3 pl-2">
        <button
          className="w-36 items-center justify-center rounded-full border-2 border-black p-3 font-semibold hover:bg-white hover:underline hover:duration-700"
          id="words"
        >
          Learn More
        </button>
        <button
          className="hover:bg-p w-36 rounded-full border-2 border-purple-400 bg-gray-50 p-3 font-semibold text-purple-400 hover:border-purple-300 hover:bg-white hover:text-black hover:duration-700"
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
    <main className="flex items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#d8c6d8] to-[#683a8d]">
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-black">
        <div className="grid h-screen max-w-5xl grid-cols-2 items-center justify-center align-middle md:gap-y-8">
          <SplitT></SplitT>
          <div className="flex h-3/4 w-3/4 items-center justify-center rounded-3xl bg-black">
            <Image
              src="/women_training.jpg"
              alt="Training"
              width={820}
              height={800}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-x-6 md:gap-y-8">
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
