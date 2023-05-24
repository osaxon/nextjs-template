import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Style = "light" | "dark" | "bold";

type SectionProps = {
  title: string;
  displayTitle: boolean;
  img: string;
  content: string;
  style: Style;
};

type StyleObject = {
  background: string;
  text: string;
  button: string;
};

const styleMap = new Map<string, StyleObject>();
styleMap.set("light", {
  background: "bg-base-100",
  text: "text-base-content",
  button: "btn",
});
styleMap.set("dark", {
  background: "bg-neutral",
  text: "text-neutral-content",
  button: "btn-secondary",
});
styleMap.set("bold", {
  background: "bg-secondary",
  text: "text-secondary-content",
  button: "btn-accent",
});

export default function SectionWithImage(props: SectionProps) {
  const { title, displayTitle, content, style, img } = props;
  const stylesObject = styleMap.get(style);

  if (!stylesObject) {
    return <div>Invalid style</div>;
  }

  const { background, text, button } = stylesObject;

  return (
    <section
      className={cn([
        background,
        "flex h-[100vh] flex-col items-center justify-center py-20",
      ])}
    >
      {displayTitle ?? <h2>{title}</h2>}
      <div className="container flex flex-col gap-12 sm:flex-row">
        <div className="flex flex-col items-center justify-evenly gap-y-8">
          <p
            className={cn([
              text,
              "w-full text-center font-serif text-2xl tracking-wide",
            ])}
          >
            {content}
          </p>
          <button className={cn([button, "btn rounded-sm"])}>contact</button>
        </div>

        <div className="h-auto w-full shrink-0 sm:w-1/2 md:w-7/12">
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
