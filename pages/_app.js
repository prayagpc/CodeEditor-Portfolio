import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <ThemeProvider>
    <Layout>
      <Head title={`Prayag Choudhary | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
      
  );
}

export default MyApp;
