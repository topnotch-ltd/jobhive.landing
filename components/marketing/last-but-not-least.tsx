/* eslint-disable react/display-name */

import {
  title,
  subtitle,
  titleWrapper,
  sectionWrapper,
} from "@/components/primitives";
import { FeaturesGrid } from "@/components/marketing/features-grid";
import landingContent from "@/content/landing";
import { Image } from "@nextui-org/react";

export const LastButNotLeast = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <div className={titleWrapper({ class: "items-left" })}>
            <div>
              <h1 className={title({ size: "lg" })}>Coming&nbsp;</h1>
              <h1 className={title({ color: "yellow", size: "lg" })}>soon</h1>
            </div>
            <div>
              <h1 className={title({ size: "lg" })}>near&nbsp;</h1>
              <h1 className={title({ size: "lg", color: "pink" })}>you.</h1>
            </div>
          </div>
          <p
            className={subtitle({
              class:
                "mt-4 md:w-full text-left flex justify-left items-center",
            })}
          >
            We are working hard to bring you the best experience.
          </p>
          <p
            className={subtitle({
              class:
                "mt-4 md:w-full text-left flex justify-left items-center",
            })}
          >
            Stay tuned for updates and upcoming features.
          </p>
        </div>
        <div
          className="grid lg:grid-cols-2"
          style={{ gridTemplateColumns: "5fr 2fr" }}
        >
          <FeaturesGrid features={landingContent.fullFeatures} />

          <Image
            alt="Resume"
            as={Image}
            className="overflow-visible right-[-80px] top-[60px]"
            height={1200}
            src="/images/hero-dashboard.png"
            width={1200}
          />

        </div>
      </div>
    </section>
  );
};
