import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import siteConfig from "@/site.config";

export default function Document() {
  return (
    <Html lang="en" data-theme={siteConfig.siteTheme}>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="setmore_script"
          type="text/javascript"
          src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
        ></Script>
      </body>
    </Html>
  );
}
