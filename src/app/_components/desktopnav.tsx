"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";

const DesktopNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 bg-white shadow-md">
      <div className="relative z-40 mx-auto w-full max-w-5xl justify-center">
        <Accordion
          className="relative w-full justify-center border"
          orientation="horizontal"
          type="multiple" // Allows multiple AccordionItems to be open
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="justify-center p-10">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              {/* Nested Accordion Items */}
              <Accordion
                type="single" // Allows multiple AccordionItems to be open
                collapsible
                className="px-auto flex w-full max-w-full flex-row justify-center gap-60 border"
              >
                <AccordionItem value="item-2" className="w-40 max-w-48">
                  <AccordionTrigger>Expert</AccordionTrigger>
                  <AccordionContent className="justify-start pb-4 pl-8 text-left">
                    ...
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3 " className="w-40 max-w-48">
                  <AccordionTrigger>Intermediate</AccordionTrigger>
                  <AccordionContent className="justify-start pl-8 text-left">
                    <ul className="list-disc">
                      <li>...</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="w-40 max-w-48">
                  <AccordionTrigger>Beginner/Porgressing</AccordionTrigger>
                  <AccordionContent className="justify-start pl-8 text-left">
                    <ul className="list-disc">
                      <li>Text-split</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
