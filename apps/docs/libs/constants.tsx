import {
  BugIcon,
  DiscordIcon,
  GithubIcon,
  StarIcon,
  SunFilledIcon,
  TwitterIcon,
} from "@/components/icons";

export const TWITTER_USER_NAME = "getnextui";
export const SITE_URL = "https://nextui.org";

export const communityAccounts = [
  {
    title: "Twitter",
    description: "For announcements, tips and general information.",
    icon: <TwitterIcon className="text-[#00ACEE]" size={32} />,
    href: "https://twitter.com/getnextui",
    isExternal: true,
  },
  {
    title: "Discord",
    description: "To get involved in the community, ask questions and share tips.",
    icon: <DiscordIcon className="text-[#7289DA]" size={32} />,
    href: "https://discord.gg/9b6yyZKmH4",
    isExternal: true,
  },
  {
    title: "Github",
    description: "To report bugs, request features and contribute to the project.",
    icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
    href: "https://github.com/nextui-org/nextui",
    isExternal: true,
  },
];

export const pricingPlan = [
  {
    title: "Free",
    description: "For users who dont want to pay.",
    icon: <BugIcon className="text-[#ff8282]" size={50} />,
    href: "https://twitter.com/getnextui",
    isExternal: false,
    price: "0",
  },
  {
    title: "Hobby",
    description: "Congrats you got some disposable income!.",
    icon: <StarIcon className="text-[#c0ceff]" size={50} />,
    href: "https://discord.gg/9b6yyZKmH4",
    isExternal: false,
    price: "$5",
  },
  {
    title: "Pro",
    description: "Invest in our company please.",
    icon: <SunFilledIcon className="text-[#ffd723] dark:text-[#E7E7E7]" size={50} />,
    href: "https://github.com/nextui-org/nextui",
    isExternal: false,
    price: "$10",
  },
];
