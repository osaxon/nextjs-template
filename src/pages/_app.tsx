import { type AppType } from "next/app";
import Layout from "@/components/Layout";
import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
