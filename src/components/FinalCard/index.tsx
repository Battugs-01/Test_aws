import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  name?: string;
  jobtitle?: string;
}

export default function FinalCard({ name = "Eleanor Pena", jobtitle = "TechPartners", ...props }: Props) {
  return (
    <div {...props}>
      <div className="relative h-[400px] w-[400px] self-stretch md:h-auto">
        <Img
          src="images/img_unsplash_3tll_97hnjo.png"
          alt="unsplash3tll"
          className="h-[400px] w-full rounded-[32px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center justify-center rounded-[32px] bg-gray-800_19 px-14 py-[140px] md:p-5">
          <Img src="images/img_icon_linkedin.svg" alt="iconlinkedin" className="h-[120px] w-[120px]" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[5px]">
        <Heading as="h1" className="text-center">
          {name}
        </Heading>
        <Text as="p" className="text-center !font-normal">
          {jobtitle}
        </Text>
      </div>
    </div>
  );
}
