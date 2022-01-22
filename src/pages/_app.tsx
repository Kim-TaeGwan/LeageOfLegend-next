import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Layout";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  // axios.defaults.withCredentials = true;
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
