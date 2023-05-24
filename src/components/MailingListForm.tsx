import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import toast from "react-hot-toast";

import { api } from "@/utils/api";
import { cn } from "@/lib/utils";

type Style = "light" | "dark" | "bold";

type FormProps = {
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

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function MailingListForm(props: FormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    subscribe({ email: data.email });
  }

  const {
    mutate: subscribe,
    data,
    error,
  } = api.mail.subscribe.useMutation({
    onSuccess: () => {
      toast.success("Wahoo! Thanks for signing up.");
      form.reset({ email: "" });
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.email;
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error(e.message);
      }
    },
  });
  const { style } = props;
  const stylesObject = styleMap.get(style);

  if (!stylesObject) {
    return <div>Invalid style</div>;
  }

  const { background, text, button } = stylesObject;

  return (
    <section className={cn([background, "pb-20 pt-10"])}>
      <div className="container">
        <h2 className={cn([text, "pb-6 text-3xl"])}>
          Subscribe to our Newsletter
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={text}>Email</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(text, "bg-base-100")}
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className={text} />
                </FormItem>
              )}
            />
            <button className={cn(button, "btn rounded-sm")} type="submit">
              Submit
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
