import React from "react";
import { Button, Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  timetrack?: string;
  conference?: string;
  heading3track?: string;
  p9009thirty?: string;
  timetrackOne?: React.ReactNode | string;
  heading3track1?: string;
  p9009thirtyone?: string;
  timetrackTwo?: string;
  opening?: string;
  p9009thirtytwo?: string;
  timetrackThree?: string;
  heading3track2?: string;
  generativeai?: string;
  heading3track3?: string;
  generativeai1?: string;
  p9009thirty1?: string;
  timetrack1?: string;
  conference1?: string;
  p9009thirty2?: string;
  timetrack2?: string;
  opening1?: string;
  conference2?: string;
  p9009thirty3?: string;
  timetrack3?: string;
  heading3track4?: string;
  generativeai2?: string;
  conference3?: string;
  p9009thirty4?: string;
  timetrack4?: string;
  heading3track5?: string;
  generativeai3?: string;
  heading3track6?: string;
  generativeai4?: string;
  p9009thirty5?: string;
  timetrackFour?: string;
  coffeeBreak?: string;
  p9009thirtyfour?: string;
  timetrackFive?: string;
  heading3track7?: string;
  generativeai5?: string;
  conference4?: string;
  p9009thirtyfive?: string;
  timetrackSix?: string;
  conference5?: string;
  conference6?: string;
}

export default function FinalContainer({
  timetrack = "Time/Track",
  conference = "Conference",
  heading3track = "Gameday",
  p9009thirty = "8:00 - 9:00",
  timetrackOne = (
    <>
      Registration &<br />
      Breakfast
    </>
  ),
  heading3track1 = "Registration & Breakfast",
  p9009thirtyone = "9:00 - 9:30",
  timetrackTwo = "Time/Track",
  opening = "Opening Notes: Organizers",
  p9009thirtytwo = "9:00 - 9:30",
  timetrackThree = "Time/Track",
  heading3track2 = "Conference",
  generativeai = "Generative AI: tech du-jour or the next big thing?",
  heading3track3 = "Conference",
  generativeai1 = "Generative AI: tech du-jour or the next big thing?",
  p9009thirty1 = "9:00 - 9:30",
  timetrack1 = "Time/Track",
  conference1 = "Conference",
  p9009thirty2 = "9:00 - 9:30",
  timetrack2 = "Time/Track",
  opening1 = "Opening Notes: Organizers",
  conference2 = "Conference",
  p9009thirty3 = "9:00 - 9:30",
  timetrack3 = "Time/Track",
  heading3track4 = "Conference",
  generativeai2 = "Generative AI: tech du-jour or the next big thing?",
  conference3 = "Conference",
  p9009thirty4 = "9:00 - 9:30",
  timetrack4 = "Time/Track",
  heading3track5 = "Conference",
  generativeai3 = "Generative AI: tech du-jour or the next big thing?",
  heading3track6 = "Conference",
  generativeai4 = "Generative AI: tech du-jour or the next big thing?",
  p9009thirty5 = "9:00 - 9:30",
  timetrackFour = "Time/Track",
  coffeeBreak = "Coffee break",
  p9009thirtyfour = "9:00 - 9:30",
  timetrackFive = "Time/Track",
  heading3track7 = "Conference",
  generativeai5 = "Generative AI: tech du-jour or the next big thing?",
  conference4 = "Conference",
  p9009thirtyfive = "9:00 - 9:30",
  timetrackSix = "Time/Track",
  conference5 = "Conference",
  conference6 = "Conference",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex self-stretch md:flex-col">
        <div className="flex p-6 sm:p-5">
          <div className="flex">
            <Text as="p">{timetrack}</Text>
          </div>
        </div>
        <div className="flex flex-1 md:flex-col md:self-stretch">
          <Button size="md" shape="square" className="w-full border-r font-bold !text-orange-A200 sm:px-5">
            {conference}
          </Button>
          <div className="flex w-full justify-center rounded-tr-[32px] border-b border-dashed border-gray-100_48 p-[19px] opacity-0.3">
            <Heading as="h1" className="self-end">
              {heading3track}
            </Heading>
          </div>
        </div>
      </div>
      <div className="flex self-stretch sm:flex-col">
        <div className="flex w-[13%] justify-center bg-gray-600 p-[21px] sm:w-full sm:p-5">
          <div className="flex w-full flex-col self-start">
            <Heading as="h2">{p9009thirty}</Heading>
            <Text as="p" className="w-[96%] text-center leading-[26px] md:w-full">
              {timetrackOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-1 justify-center border-b border-solid border-gray-100_7f p-[46px] md:p-5 sm:self-stretch">
          <Heading as="h2" className="self-end">
            {heading3track1}
          </Heading>
        </div>
      </div>
      <div className="flex self-start md:flex-col">
        <div className="flex p-[21px] sm:p-5">
          <div className="flex flex-col items-center gap-0.5 self-start">
            <Heading as="h2">{p9009thirtyone}</Heading>
            <Text as="p">{timetrackTwo}</Text>
          </div>
        </div>
        <Button shape="square" className="min-w-[1137px] font-bold sm:px-5">
          {opening}
        </Button>
      </div>
      <div className="flex self-stretch md:flex-col">
        <div className="flex bg-gray-600 p-[21px] sm:p-5">
          <div className="flex flex-col items-center gap-0.5 self-start">
            <Heading as="h2">{p9009thirtytwo}</Heading>
            <Text as="p">{timetrackThree}</Text>
          </div>
        </div>
        <div className="flex flex-1 gap-px md:flex-col md:self-stretch">
          <div className="flex w-full justify-center gap-4 border-b border-r border-solid border-gray-100_7f p-[17px] sm:flex-col">
            <Img
              src="images/img_unsplash_3tll_97hnjo_65x65.png"
              alt="conference_one"
              className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
            />
            <div className="flex flex-col items-start gap-[13px]">
              <Heading as="h2">{heading3track2}</Heading>
              <Text size="s" as="p">
                {generativeai}
              </Text>
            </div>
          </div>
          <div className="flex w-full justify-center gap-4 border-b border-solid border-gray-100_7f p-[17px] sm:flex-col">
            <Img
              src="images/img_unsplash_3tll_97hnjo_65x65.png"
              alt="unsplash3tll"
              className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
            />
            <div className="flex flex-col items-start gap-[13px]">
              <Heading as="h3">{heading3track3}</Heading>
              <Text size="s" as="p">
                {generativeai1}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-px self-stretch">
        <div className="flex md:flex-col">
          <div className="flex p-[21px] sm:p-5">
            <div className="flex flex-col items-center gap-0.5 self-start">
              <Heading as="h2">{p9009thirty1}</Heading>
              <Text as="p">{timetrack1}</Text>
            </div>
          </div>
          <Button shape="square" className="min-w-[1137px] font-bold sm:px-5">
            {conference1}
          </Button>
        </div>
        <div className="flex flex-1 md:flex-col">
          <div className="flex bg-gray-600 p-[21px] sm:p-5">
            <div className="flex flex-col items-center gap-0.5 self-start">
              <Heading as="h2">{p9009thirty2}</Heading>
              <Text as="p">{timetrack2}</Text>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col md:self-stretch">
            <Button shape="square" className="w-full border-r font-bold sm:px-5">
              {opening1}
            </Button>
            <Button shape="square" className="w-full font-bold sm:px-5">
              {conference2}
            </Button>
          </div>
        </div>
        <div className="flex flex-1 md:flex-col">
          <div className="flex p-[21px] sm:p-5">
            <div className="flex flex-col items-center gap-0.5 self-start">
              <Heading as="h2">{p9009thirty3}</Heading>
              <Text as="p">{timetrack3}</Text>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col md:self-stretch">
            <div className="flex w-full justify-center gap-4 border-b border-r border-solid border-gray-100_7f p-[17px] sm:flex-col">
              <Img
                src="images/img_unsplash_3tll_97hnjo_65x65.png"
                alt="unsplash3tll"
                className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
              />
              <div className="flex flex-col items-start gap-[13px]">
                <Heading as="h3">{heading3track4}</Heading>
                <Text size="s" as="p">
                  {generativeai2}
                </Text>
              </div>
            </div>
            <Button shape="square" className="w-full font-bold sm:px-5">
              {conference3}
            </Button>
          </div>
        </div>
        <div className="flex flex-1 md:flex-col">
          <div className="flex bg-gray-600 p-[21px] sm:p-5">
            <div className="flex flex-col items-center gap-0.5 self-start">
              <Heading as="h2">{p9009thirty4}</Heading>
              <Text as="p">{timetrack4}</Text>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col md:self-stretch">
            <div className="flex w-full justify-center gap-4 border-b border-r border-solid border-gray-100_7f p-[17px] sm:flex-col">
              <Img
                src="images/img_unsplash_3tll_97hnjo_65x65.png"
                alt="unsplash3tll"
                className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
              />
              <div className="flex flex-col items-start gap-[13px]">
                <Heading as="h3">{heading3track5}</Heading>
                <Text size="s" as="p">
                  {generativeai3}
                </Text>
              </div>
            </div>
            <div className="flex w-full justify-center gap-4 border-b border-solid border-gray-100_7f p-[17px] sm:flex-col">
              <Img
                src="images/img_unsplash_3tll_97hnjo_65x65.png"
                alt="unsplash3tll"
                className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
              />
              <div className="flex flex-col items-start gap-[13px]">
                <Heading as="h4">{heading3track6}</Heading>
                <Text size="s" as="p">
                  {generativeai4}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex self-start md:flex-col">
        <div className="flex p-[21px] sm:p-5">
          <div className="flex flex-col items-center gap-0.5 self-start">
            <Heading as="h2">{p9009thirty5}</Heading>
            <Text as="p">{timetrackFour}</Text>
          </div>
        </div>
        <Button shape="square" className="min-w-[1137px] border-r font-bold sm:px-5">
          {coffeeBreak}
        </Button>
      </div>
      <div className="flex self-stretch md:flex-col">
        <div className="flex bg-gray-600 p-[21px] sm:p-5">
          <div className="flex flex-col items-center gap-0.5 self-start">
            <Heading as="h2">{p9009thirtyfour}</Heading>
            <Text as="p">{timetrackFive}</Text>
          </div>
        </div>
        <div className="flex flex-1 md:flex-col md:self-stretch">
          <div className="flex w-full justify-center gap-4 border-b border-r border-solid border-gray-100_7f p-[17px] sm:flex-col">
            <Img
              src="images/img_unsplash_3tll_97hnjo_65x65.png"
              alt="unsplash3tll"
              className="h-[65px] w-[65px] rounded-lg object-cover sm:w-full"
            />
            <div className="flex flex-col items-start gap-[13px]">
              <Heading as="h2">{heading3track7}</Heading>
              <Text size="s" as="p">
                {generativeai5}
              </Text>
            </div>
          </div>
          <Button shape="square" className="w-full font-bold sm:px-5">
            {conference4}
          </Button>
        </div>
      </div>
      <div className="flex self-stretch md:flex-col">
        <div className="flex p-[21px] sm:p-5">
          <div className="flex flex-col items-center gap-0.5 self-start">
            <Heading as="h2">{p9009thirtyfive}</Heading>
            <Text as="p">{timetrackSix}</Text>
          </div>
        </div>
        <div className="flex flex-1 md:flex-col md:self-stretch">
          <Button shape="square" className="w-full border-r font-bold sm:px-5">
            {conference5}
          </Button>
          <Button className="w-full rounded-br-[32px] border font-bold sm:px-5">{conference6}</Button>
        </div>
      </div>
    </div>
  );
}
