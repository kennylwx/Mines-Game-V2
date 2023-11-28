"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SidePanel = (props: Props) => {
  const [state, setState] = useState([]);

  return (
    <div className="flex flex-col h-full border-r-[0.5px] border-borderColor">
      {/* Header */}
      <div className="flex flex-col items-center justify-center border-b-[0.5px] border-borderColor h-[50px]">
        <Link href="/game" className="text-textColor">
          Game
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
