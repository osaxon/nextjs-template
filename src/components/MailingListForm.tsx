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

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function MailingListForm() {
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

  return (
    <section className="container pb-20 pt-10">
      <h2 className="pb-6 text-3xl">Subscribe to our Newsletter</h2>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
