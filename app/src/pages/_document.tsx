import axios from "axios";
import { Head, Html, Main, NextScript } from "next/document";

axios.defaults.baseURL = "http://localhost:8000/";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
