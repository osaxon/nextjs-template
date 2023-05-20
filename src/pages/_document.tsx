import { Head, Html, Main, NextScript } from "next/document";
import siteConfig from "@/site.config";

export default function Document() {
  return (
    <Html lang="en" data-theme={siteConfig.siteTheme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
