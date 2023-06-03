import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import "../styles/styles.css";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    // Prevents a flash of light mode on page load (optional)
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
