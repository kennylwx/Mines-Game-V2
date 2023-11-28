import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";
import { HomeLayout } from "./layouts";

const encodeSans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mines Game v2",
  description: "Mines Game developed by Kenny Lee",
};

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`${encodeSans.className} bg-pageBgColor`}>
      <body className="flex flex-row h-screen w-screen">
        <main className="flex w-full">
          <HomeLayout title={"HOME"}>{children}</HomeLayout>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
