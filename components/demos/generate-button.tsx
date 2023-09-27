"use client";

import {useRef} from "react";
import {Button} from "@nextui-org/react";

import {StarIcon} from "@/components/icons";
import {trackEvent} from "@/utils/va";

export const GenerateButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleConfetti = async () => {
    const {clientWidth, clientHeight} = document.documentElement;
    const boundingBox = buttonRef.current?.getBoundingClientRect?.();

    const targetY = boundingBox?.y ?? 0;
    const targetX = boundingBox?.x ?? 0;
    const targetWidth = boundingBox?.width ?? 0;

    const targetCenterX = targetX + targetWidth / 2;
    const confetti = (await import("canvas-confetti")).default;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    });

    trackEvent("LandingPage - Confetti Button", {
      action: "press",
      category: "landing-page",
    });
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      // className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      color="primary"
      endContent={
        <StarIcon
          className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
          strokeWidth={2}
        />
      }
      className="px-unit-8 min-w-unit-28 h-unit-14 text-2xl gap-unit-3 rounded-large"
      onPress={handleConfetti}
    >
      Generate now!
    </Button>
  );
};

// <Button
// as={NextLink}
// className="w-full md:w-auto"
// color="primary"
// endContent={
//   <ArrowRightIcon
//     className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
//     strokeWidth={2}
//   />
// }
// href="/docs/guide/introduction"
// radius="full"
// size="lg"
// onPress={() => {
//   trackEvent("Hero - Get Started", {
//     name: "Get Started",
//     action: "click",
//     category: "landing-page",
//     data: "/docs/guide/introduction",
//   });
// }}
// >
// Generate now!
// </Button>
