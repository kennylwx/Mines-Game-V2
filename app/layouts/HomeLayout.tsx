import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const HomeLayout = ({ title, children }: Props) => {
  return (
    <div className="flex flex-row w-full bg-pageBgColor">
      <div className="w-[50px] min-w-[50px] h-full">
        <div className="flex flex-col h-full border-r-[0.5px] border-borderColor">
          <div className="flex flex-col items-center justify-center border-b-[0.5px] border-borderColor h-[50px]">
            <Link href="/" className="text-textColor">
              HME
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center py-2">
            <Link href="/game" className="text-textColor">
              GME
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <div className="w-full h-[50px] border-b-[0.5px] border-borderColor flex flex-row items-center p-4">
          <h1 className="text-textColor font-semibold">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
