import axios, { AxiosError } from "axios";
import { z } from "zod";
import { env } from "process";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const mailRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_AUDIENCE_ID } =
        env;
      const url = `https://${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        MAILCHIMP_API_SERVER
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      }.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
      const data = {
        email_address: input.email,
        status: "subscribed",
      };

      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `api_key ${MAILCHIMP_API_KEY ?? ""}`,
        },
      };

      try {
        const response = await axios.post(url, data, options);
        // if (response.status >= 400) {
        //   throw new TRPCError({ code: "BAD_REQUEST" });
        // }
        return;
      } catch (error: unknown) {
        function isErrorData(obj: unknown): obj is { detail: string } {
          return (
            typeof obj === "object" &&
            obj !== null &&
            "detail" in obj &&
            typeof (obj as { detail: string }).detail === "string"
          );
        }

        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response && isErrorData(error.response.data)
              ? error.response.data.detail
              : "An error occurred";
          throw new TRPCError({ message: errorMessage, code: "BAD_REQUEST" });
        }
      }
    }),
});
