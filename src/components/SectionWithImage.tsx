import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "bold";

type SectionProps = {
  title: string;
  displayTitle: boolean;
  img: string;
  content: string;
  theme: Theme;
};

const themeMap = new Map();
themeMap.set("light", "bg-base-100");
themeMap.set("dark", "bg-neutral");
themeMap.set("bold", "bg-primary");

export default function SectionWithImage({
  title,
  displayTitle,
  content,
  theme,
  img,
}: SectionProps) {
  return (
    <section
      className={cn([
        themeMap.get(theme),
        "flex h-[100vh]  flex-col items-center justify-center py-20",
      ])}
    >
      {displayTitle ?? <h2>{title}</h2>}
      <div className="container flex flex-col gap-12 sm:flex-row">
        <div className="flex flex-col items-center justify-evenly gap-y-8">
          <p
            className={cn(
              [
                theme === "dark"
                  ? "text-neutral-content"
                  : theme === "light"
                  ? "text-base-content"
                  : theme === "bold"
                  ? "text-primary-content"
                  : "",
              ],
              "w-full text-center font-serif text-2xl tracking-wide"
            )}
          >
            {content}
          </p>
          <button
            className={cn(
              [
                theme === "dark"
                  ? "btn-primary"
                  : theme === "light"
                  ? "btn-secondary"
                  : theme === "bold"
                  ? "btn-accent"
                  : "",
              ],
              "btn rounded-sm"
            )}
          >
            contact
          </button>
        </div>

        <div className="h-auto w-full shrink-0 sm:w-1/2 md:w-7/12">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={img}
              alt="alt"
              className="rounded-md object-cover"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
