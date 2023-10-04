"use client";

/* eslint-disable react/display-name */
import {
  Button,
  Image,
  Link as NextUILink,
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import {useInView} from "framer-motion";
import {clsx} from "@nextui-org/shared-utils";
import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@nextui-org/shared-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";

import {FeaturesGrid} from "./features-grid";

import landingContent from "@/content/landing";
import {GradientBox} from "@/components";
import {
  KeyboardBoldIcon,
  MouseCircleBoldIcon,
  SquaresBoldIcon,
  FatrowsBoldIcon,
  EyeBoldIcon,
  KeyboardOpenBoldIcon,
  InfoBoldIcon,
} from "@/components/icons";
import {title, subtitle, titleWrapper, sectionWrapper} from "@/components/primitives";
import {useIsMobile} from "@/hooks/use-media-query";

const DemoCodeModal = dynamic(() => import("../demo-code-modal").then((mod) => mod.DemoCodeModal), {
  ssr: false,
});

const a11yItems = [
  {
    title: "Keyboard navigation",
    icon: <KeyboardBoldIcon />,
  },
  {
    title: "Managed focus",
    icon: <MouseCircleBoldIcon />,
  },
  {
    title: "Collision aware",
    icon: <SquaresBoldIcon />,
  },
  {
    title: "Alignment control",
    icon: <FatrowsBoldIcon />,
  },
  {
    title: "Screen reader support",
    icon: <EyeBoldIcon />,
  },
  {
    title: "Typehead support",
    icon: <KeyboardOpenBoldIcon />,
  },
];

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const A11yOtb = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useRef<any>(null);

  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    margin: isMobile ? "0px" : "-300px",
  });

  useEffect(() => {
    setIsDropdownOpen(!isMobile && isInView);
  }, [isMobile, isInView]);

  return (
    <section className={sectionWrapper({class: "z-20 mt-16 lg:mt-44"})}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper()}>
            <h1 className={title({size: "lg"})}>Become a</h1>
            <div>
              <h1 className={title({color: "green", size: "lg"})}>top&nbsp;</h1>
              <h1 className={title({size: "lg"})}>applicant.</h1>
            </div>
          </div>
          <p className={subtitle()}>
            We are working hard to bring you the best experience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col mt-8 lg:mt-16 gap-6">
            <FeaturesGrid
              classNames={{
                base: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",
                header: "pb-3",
                card: "bg-white dark:bg-default-400/10",
                iconWrapper: "bg-default-100 dark:bg-transparent text-default-500/50",
              }}
              features={a11yItems}
            />
            <Button
              aria-label="Learn more about accessibility"
              as={Link}
              className="max-w-fit"
              color="success"
              href="/docs/customization/customize-theme"
              radius="full"
              size="sm"
              variant="flat"
            >
              Learn more
            </Button>
          </div>

          <Image
            alt="Resume"
            as={Image}
            className="object-cover right-[-120px] top-[-50px]"
            height={750}
            src="/images/hero-top-applicant.png"
            width={750}
          />


        </div>
      </div>
      <div className="absolute hidden dark:md:block h-full dark:opacity-70 -bottom-[10%] left-[20%] z-[-10]">
        <Image
          removeWrapper
          alt="a11y background"
          className="h-full z-[-10]"
          src="/gradients/green.svg"
        />
      </div>

      <DemoCodeModal
        code={landingContent.a11yExampleCode}
        isOpen={isModalOpen}
        title="Dropdown"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
