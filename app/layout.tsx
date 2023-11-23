import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
import { GameStarterPanel } from "./components";

const encodeSans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mines Game v2",
  description: "Mines Game developed by Kenny Lee",
};

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${encodeSans.className}`}>
      <body className="flex flex-row h-screen w-screen">
        <div className="flex w-12 tablet:w-96">
          {/* <GameStarterPanel /> */}
        </div>
        <div className="flex w-full bg-yellow-400">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
