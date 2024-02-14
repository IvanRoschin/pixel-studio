"use client";

import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const CmsNavbar = (props: Props) => {
  return (
    <div
      className="
      w-full
      flex
      items-center
      justify-between
      mx-auto
      p-5
    "
    >
      <div>
        <Link href="/#hero">
          <Image
            src="/images/header/logo_3.png"
            alt="pixel-studio"
            width={150}
            height={50}
            className="cursor-pointer object-cover"
          />
        </Link>
</div>
<div className="flex flex-row justify-center items-center space-x-2">
          <SocialIcon
          url="https://www.linkedin.com/in/ivan-roschin-150266241"
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
        />
        <SocialIcon
          url="https://github.com/IvanRoschin"
          fgColor="gray"
          bgColor="transparent"
          className="border border-gray-500 hover:border-[#F7AB0A]/50 rounded-full hover:scale-110"
        />
  </div>

    </div>
  );
};

export default CmsNavbar;
