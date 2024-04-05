import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  unsplash3tll?: string;
  name?: string;
  jobtitle?: string;
}

export default function FinalCard1({
  unsplash3tll = "images/img_unsplash_3tll_97hnjo_400x400.png",
  name = "Esther Howard",
  jobtitle = "Binford Ltd.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src={unsplash3tll} alt="unsplash3tll" className="h-[400px] w-full rounded-[32px] object-cover md:h-auto" />
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
