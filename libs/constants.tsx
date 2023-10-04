import {
  BugIcon,
  DiscordIcon,
  GithubIcon,
  StarIcon,
  SunFilledIcon,
  TwitterIcon,
} from "@/components/icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
    description: "To ask questions and share tips with the community.",
    icon: <DiscordIcon className="text-[#7289DA]" size={32} />,
    href: "https://discord.gg/9b6yyZKmH4",
    isExternal: true,
  },
  {
    title: "Linkedin",
    description: "For networking and collaboration within the industry.",
    icon: <FaLinkedin className="text-[#333] dark:text-[#1d74cb]" size={32} />,
    href: "https://github.com/nextui-org/nextui",
    isExternal: true,
  },
  {
    title: "Instagram",
    description: "To share your beautiful resumes and design ideas.",
    icon: <FaInstagram className="text-[#333] dark:text-[#c13a92]" size={32} />,
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
