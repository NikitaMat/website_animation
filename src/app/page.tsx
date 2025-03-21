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
    <div className="grid h-96 max-h-screen items-center justify-center rounded-5xl border border-black border-opacity-100 bg-black bg-opacity-80 p-8 md:max-w-lg">
      <div className="hero" ref={hero}>
        <h1
          className="pb-8 text-9xl font-extrabold leading-none tracking-tight text-white sm:text-5xl"
          ref={quote}
        >
          Fitness Anastasia!
        </h1>
      </div>
      <p className="pl-2 text-3xl text-white" ref={quote2}>
        Ich mache dich jetzt FIT du kleine SAU!
      </p>
      <div className="justify relative mt-6 flex items-start gap-3 pl-2 text-lg">
        <button
          className="w-36 items-center justify-center rounded-full border-2 bg-transparent p-3 font-semibold text-white hover:bg-black hover:text-white hover:underline hover:duration-500"
          id="words"
        >
          Learn More
        </button>
        <button
          className="w-36 rounded-full border-2 border-black bg-white p-3 font-semibold text-black hover:border-white hover:bg-black hover:text-white hover:duration-500"
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
    <main className="flex items-center justify-center bg-white bg-gradient-to-br pt-20">
      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-t from-white to-indigo-500 px-2 text-black">
        <div className="relative max-h-screen items-center justify-center align-middle">
          <Image
            src="/women_training.jpg"
            alt="Training"
            width={1000}
            height={1000}
            className="relative -right-32 rounded-5xl"
          />
          <div className="absolute -left-32 top-40 z-10 h-screen w-1/2 max-w-lg">
            <SplitT />
          </div>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-x-6 md:gap-y-8"></div>
      </div>
    </main>
  );
}
