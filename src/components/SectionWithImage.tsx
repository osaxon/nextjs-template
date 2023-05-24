import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BackgroundPattern from "./BackgroundPattern";

type Style = "light" | "dark" | "bold";
type ImgPosition = "left" | "right";

type SectionProps = {
  title: string;
  displayTitle: boolean;
  img: string;
  content: string;
  style: Style;
  imgPosition: ImgPosition;
  displayBGPattern: boolean;
};

type StyleObject = {
  background: string;
  text: string;
  button: string;
  backgroundStroke: string;
};

const styleMap = new Map<string, StyleObject>();
styleMap.set("light", {
  background: "bg-base-100",
  text: "text-base-content",
  button: "btn",
  backgroundStroke: "stroke-primary",
});
styleMap.set("dark", {
  background: "bg-neutral",
  text: "text-neutral-content",
  button: "btn-secondary",
  backgroundStroke: "stroke-base-100",
});
styleMap.set("bold", {
  background: "bg-secondary",
  text: "text-secondary-content",
  button: "btn-accent",
  backgroundStroke: "stroke-base-100",
});

export default function SectionWithImage(props: SectionProps) {
  const {
    title,
    displayTitle,
    content,
    style,
    img,
    imgPosition,
    displayBGPattern,
  } = props;
  const stylesObject = styleMap.get(style);

  if (!stylesObject) {
    return <div>Invalid style</div>;
  }

  const { background, text, button, backgroundStroke } = stylesObject;

  return (
    <section
      className={cn([
        background,
        "relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden py-20 @container",
      ])}
    >
      {displayBGPattern && (
        <BackgroundPattern
          stroke={backgroundStroke}
          className="absolute opacity-30"
        />
      )}

      {displayTitle ?? <h2>{title}</h2>}
      <div
        className={cn(
          [imgPosition === "left" ? "@4xl:flex-row-reverse" : "@4xl:flex-row"],
          "container z-50 flex flex-col gap-12"
        )}
      >
        <div className="flex basis-2/5 flex-col items-center justify-evenly gap-y-8">
          <p
            className={cn([
              text,
              "text-center font-serif text-xl tracking-wide sm:text-2xl",
            ])}
          >
            {content}
          </p>
          <button className={cn([button, "btn rounded-sm"])}>contact</button>
        </div>

        <div className="h-auto basis-3/5">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={img}
              alt="alt"
              className="rounded-sm object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
