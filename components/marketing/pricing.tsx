import {Spacer} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

import {sectionWrapper, titleWrapper, title, subtitle} from "../primitives";

import {PricingGrid} from "@/components/marketing/pricing-grid";
import {pricingPlan} from "@/libs/constants";

export const Pricing = () => {
  return (
    <section className={sectionWrapper({class: "flex flex-col items-center mt-16 lg:mt-44"})}>
      <div className="max-w-4xl flex flex-col gap-8">
        <div>
          <div className={titleWrapper({class: "items-center"})}>
            <div className="inline-flex items-center">
              <h1 className={title({size: "lg"})}>Pricing Plan</h1>&nbsp;&nbsp;
            </div>
          </div>
          <p
            className={subtitle({class: "md:w-full text-center flex justify-center items-center"})}
          >
            Join our pricing plan and get access to all the features.
          </p>
          <Spacer y={12} />
          <div className="grid lg:grid-cols-2" style={{ gridTemplateColumns: "1fr 3fr" }}>

          <Image
            alt="Resume"
            as={Image}
            className="object-cover left-[20px] "
            height={180}
            src="/images/hero-pricing.png"
            width={180}
          />


          <PricingGrid
            classNames={{
              base: "lg:grid-cols-3",
              iconWrapper: "bg-transparent",
              body: "pt-6",
            }}
            features={pricingPlan}
          />

          </div>
        </div>
      </div>
    </section>
  );
};
