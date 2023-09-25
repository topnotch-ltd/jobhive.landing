"use client";
import React, {useState, useEffect} from "react";
import ReactTextTransition from "react-text-transition";
import dynamic from "next/dynamic";

import {FloatingComponents} from "./floating-components";

import getRandomNumber from "@/utils/getRandomNumber";
import {texts, paragraphs, numbers} from "@/utils/constants";
import {title, subtitle} from "@/components/primitives";
import {GenerateButton} from "@/components/demos/generate-button";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Hero = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [textFastIndex, setTextFastIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setRandomIndex(getRandomNumber(0, numbers.length));
      setTextIndex(getRandomNumber(0, texts.length));
      setParagraphIndex(getRandomNumber(0, paragraphs.length));
      setTextFastIndex(getRandomNumber(0, paragraphs.length));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="text-center leading-8 md:leading-10 md:text-center">
          <div className="inline-block">
            <h1 className={title()}>Create the perfect&nbsp;</h1>
          </div>
          <div>
            <ReactTextTransition inline style={{margin: "0 4px"}}>
              <h1 className={title({color: "violet"})}>{texts[textFastIndex]}&nbsp;</h1>
            </ReactTextTransition>
          </div>
          <h1 className={title()}>with one click!</h1>
        </div>
        <h2 className={subtitle({fullWidth: true, class: "text-center md:text-center "})}>
          Beautiful, easy and professional.
        </h2>
        <div className="self-center ">
          <GenerateButton />
        </div>
      </div>

      <FloatingComponents />

      <BgLooper />
    </section>
  );
};
