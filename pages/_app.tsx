import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import { Header } from "@/components/shared/Header";
import { InvoiceProvider } from "@/lib/context/InvioceContext";
import { ScreenProvider } from "../lib/context/ScreenContext";
import { ThemeProvider } from "../lib/context/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ScreenProvider>
        <InvoiceProvider>
          <Header />
          <Component {...pageProps} />
        </InvoiceProvider>
      </ScreenProvider>
    </ThemeProvider>
  );
}
export default MyApp;