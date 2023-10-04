"use client";

/* eslint-disable react/display-name */
import {Button, Link, Tooltip} from "@nextui-org/react";
import NextLink from "next/link";
import {Image} from "@nextui-org/react";

import {title, subtitle, titleWrapper, sectionWrapper} from "@/components/primitives";
import {CodeWindow} from "@/components/code-window";
import landingContent from "@/content/landing";
import {GradientBox} from "@/components/gradient-box";
import {CustomButton} from "@/components/demos";

import {MusicPlayer} from "@/components/demos";
import {ThemeSwitch} from "@/components/theme-switch";

import {InfoBoldIcon} from "@/components/icons";

export const Customization = () => {
  return (
    <section className={sectionWrapper({class: "mt-16 lg:mt-44"})}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper({class: "inline md:block"})}>
            <h1 className={title({size: "lg"})}>Customization made</h1>
            <div>
              <h1 className={title({size: "lg", color: "pink"})}>easy.</h1>
            </div>
          </div>
          <p className={subtitle()}>
            Feel free to modify the resume template to your liking. You can change the colors, formatting, fonts, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GradientBox isCentered className="py-14 px-4 lg:px-8" color="orange" to="top-right">
              <MusicPlayer />
              <div className="flex absolute top-2 right-2">
                <Tooltip className="text-xs px-2" content="Show code" placement="top">
                  <Button
                    isIconOnly
                    aria-label="Show code"
                    className="text-white/70 dark:text-black/70 data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onPress={() => setIsModalOpen(true)}
                  >
                    <InfoBoldIcon className="rotate-180" size={22} />
                  </Button>
                </Tooltip>
                <ThemeSwitch
                  classNames={{
                    base: "mt-1 bg-transparent rounded-xl",
                    wrapper: "!text-white/70 dark:!text-black/70",
                  }}
                />
              </div>
            </GradientBox>
          <div className="flex flex-col justify-center gap-6">
        
          <Image
            alt="Resume"
            as={Image}
            className="object-cover right-[-120px] top-[-50px]"
            height={650}
            src="/images/hero-customization.png"
            width={650}
          />

          </div>
        </div>
        <div className="flex w-1/2 justify-start">
          <Button
            aria-label="Learn more about customization"
            as={NextLink}
            className="max-w-fit bg-pink-100 text-pink-500 dark:bg-pink-900 dark:text-pink-300"
            href="/docs/customization/customize-theme"
            radius="full"
            size="sm"
            variant="flat"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
