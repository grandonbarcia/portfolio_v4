import '@/styles/globals.css';
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={oswald.className}>
      <Component {...pageProps} />
    </main>
  );
}
