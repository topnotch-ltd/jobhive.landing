"use client";
import React, {useState, useEffect} from "react";
import ReactTextTransition from "react-text-transition";
import dynamic from "next/dynamic";

import {FloatingComponents} from "./floating-components";

import {texts, numbers} from "@/utils/constants";
import {title, subtitle} from "@/components/primitives";
import {GenerateButton} from "@/components/demos/generate-button";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Hero = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [textFastIndex, setTextFastIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (randomIndex >= numbers.length - 1) {
        setRandomIndex(0);
      } else {
        setRandomIndex(randomIndex + 1);
      }
      if (textFastIndex >= texts.length - 1) {
        setTextFastIndex(0);
      } else {
        setTextFastIndex(textFastIndex + 1);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [randomIndex, textFastIndex]);

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
