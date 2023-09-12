import "./globals.css";
import { exo, roboto } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "RC Web",
    template: "%s | RC Web",
  },
  description: "Randy Caballero, Web developer, personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo.variable}, ${roboto.variable}`}>
      <body className="min-h-screen overflow-y-scroll bg-black">
        <header>
          <Navbar />
        </header>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
