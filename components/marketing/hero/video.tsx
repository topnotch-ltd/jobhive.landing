"use client";
import React, {useState, useEffect} from "react";
import ReactTextTransition from "react-text-transition";
import dynamic from "next/dynamic";
import NextImage from "next/image";

import {
  Image,
} from "@nextui-org/react";

import {FloatingComponents} from "./floating-components";

import {texts, numbers} from "@/utils/constants";
import {title, subtitle} from "@/components/primitives";
import {GenerateButton} from "@/components/demos/generate-button";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Video = () => {
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
    <section className="items-center">


      <Image
            alt="Resume"
            as={Image}
            className="object-cover "
            height={1200}
            src="/images/hero-video-placeholder.png"
            width={1200}
          />

    </section>
  );
};
