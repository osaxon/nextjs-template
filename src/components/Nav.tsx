import Link from "next/link";
import siteConfig from "@/site.config";
import { useState } from "react";
import { MenuButton } from "./ui/MenuButton";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const btnThemeMap = new Map<string, string>();
btnThemeMap.set("default", "btn btn-primary");
btnThemeMap.set("outline", "btn-outline btn btn-accent");

export default function Nav() {
  const [isClosed, setIsClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  /* Mobile navigation Style */
  const isHiddenStyle = "hidden";
  const isVisibleStyle =
    "absolute space-y-10 bg-white w-full p-6 left-0 right-0 top-0 min-h-screen text-primary-content";

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 24 },
    },
    closed: { opacity: 0, y: -120, transition: { duration: 0.2 } },
  };

  const { siteTitle, navigation } = siteConfig;

  return (
    <nav className="absolute inset-0 z-50">
      <div className="relative flex w-full cursor-pointer items-center justify-between p-6 sm:mx-auto sm:max-w-7xl">
        <div className="flex h-24 w-24 flex-col items-center justify-center gap-5 bg-primary font-bold text-base-content">
          <h1 className="font-poppins text-3xl font-bold ">LOGO</h1>
        </div>

        <ul className="hidden items-center gap-4 sm:flex">
          {navigation.mainNavigation.map(({ label, href }, i) => (
            <li key={i}>
              <Link className="link text-2xl" href={href}>
                {label}
              </Link>
            </li>
          ))}
          {navigation.navButtons.map(({ label, href, style }, i) => (
            <li key={i}>
              <Link href={href}>
                <button className={btnThemeMap.get(style)}>{label}</button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="z-50 rounded-full sm:hidden">
          <MenuButton
            isOpen={isOpen}
            strokeWidth="2"
            width={38}
            onClick={() => {
              setIsClosed(!isClosed);
              setIsOpen(!isOpen);
              setIsHidden(!isHidden);
            }}
          />
        </div>

        {/* Mobile Menu and Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute left-0 top-0 z-40 flex w-full flex-col sm:hidden"
        >
          <motion.ul
            /* Here is our animation property for the Framer Motion Navigation Menu Container */
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 0px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            layout
            className={isHidden ? isHiddenStyle : isVisibleStyle}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center gap-5 bg-primary font-bold text-base-content">
              <h1 className="font-poppins text-3xl font-bold ">LOGO</h1>
            </div>

            <div className="flex flex-col justify-center gap-5 text-3xl font-bold lg:text-5xl">
              {navigation.mainNavigation.map(({ label, href }, i) => (
                <div key={i + 1}>
                  <motion.li
                    variants={itemVariants}
                    className="font-poppins font-normal"
                  >
                    <a
                      href={href}
                      className="flex items-center gap-5 hover:text-primary-focus lg:gap-10"
                    >
                      {label}
                    </a>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="my-5 h-[0.5px] w-full bg-base-300"
                  ></motion.li>
                </div>
              ))}
            </div>

            <div>
              {/* Social Links  */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 font-normal"
              >
                <SocialIcon url="https://linkedin.com/" className="h-6 w-6" />
                <SocialIcon url="https://twitter.com/" className="h-6 w-6" />
                <SocialIcon url="https://google.com/" className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
}
