import { Exo, Roboto } from "next/font/google";

export const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: "600",
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["500", "700"],
});
