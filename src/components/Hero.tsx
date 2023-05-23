import siteConfig from "@/site.config";
import Image from "next/image";
import imgSrc from "/images/heroImg.jpg";
import HeroBG from "./HeroBG";

export default function Hero() {
  const { heroImg, heroText } = siteConfig;
  return (
    <header
      style={{
        backgroundImage: `url(${siteConfig.headerImg ?? ""})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="flex h-[80vh]"
    >
      <div className="mx-auto flex h-[70vh] w-full max-w-7xl flex-col items-center justify-between sm:flex-row">
        {/* Hero text */}
        <span className="base-content flex h-[50vh] w-full items-center justify-center px-6 font-mono text-7xl uppercase md:h-auto md:justify-start">
          {heroText}
        </span>
      </div>
    </header>
  );
}
