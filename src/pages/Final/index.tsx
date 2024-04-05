import React from "react";
import { Helmet } from "react-helmet";
import { Heading, SelectBox, Img, Text, Button } from "../../components";
import FinalCard from "../../components/FinalCard";
import FinalCard1 from "../../components/FinalCard1";
import FinalContainer from "../../components/FinalContainer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FinalPage() {
  return (
    <>
      <Helmet>
        <title>Tugsuu's Application11</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full">
        <div className="mt-20 flex flex-col gap-[43px] bg-gray-900 pb-8 sm:pb-5">
          <div className="relative mx-auto h-[816px] w-full max-w-[1376px] md:h-auto md:p-5">
            <div className="flex w-full items-center justify-center gap-2.5 rounded-bl-[32px] rounded-br-[32px] opacity-0.15 md:flex-col">
              <div className="w-full">
                <Img
                  src="images/img_placeholder_image.png"
                  alt="placeholder_one"
                  className="h-[357px] w-full rounded-[48px] object-cover md:h-auto"
                />
                <Img
                  src="images/img_placeholder_image_397x451.png"
                  alt="placeholder"
                  className="mt-2.5 h-[397px] w-full rounded-[48px] object-cover md:h-auto"
                />
                <div className="mt-2.5 flex flex-col gap-[181px] md:gap-[135px] sm:gap-[90px]">
                  <Img
                    src="images/img_placeholder_image_21x451.png"
                    alt="placeholder"
                    className="h-[21px] rounded-[10px] object-cover"
                  />
                  <Img
                    src="images/img_placeholder_image_1x451.png"
                    alt="placeholder"
                    className="h-px object-cover"
                  />
                </div>
                <Img
                  src="images/img_placeholder_image_1.png"
                  alt="placeholder"
                  className="mt-[385px] h-px w-full object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-2.5">
                  <Img
                    src="images/img_placeholder_image_193x451.png"
                    alt="placeholder"
                    className="h-[193px] rounded-[32px] object-cover"
                  />
                  <Img
                    src="images/img_placeholder_image_2.png"
                    alt="placeholder"
                    className="h-[193px] rounded-[32px] object-cover"
                  />
                </div>
                <Img
                  src="images/img_placeholder_image_368x451.png"
                  alt="placeholder"
                  className="mt-[9px] h-[368px] w-full rounded-[48px] object-cover md:h-auto"
                />
                <Img
                  src="images/img_placeholder_image_3.png"
                  alt="placeholder"
                  className="mt-[38px] h-px w-full object-cover"
                />
                <Img
                  src="images/img_placeholder_image_4.png"
                  alt="placeholder"
                  className="mt-[445px] h-px w-full object-cover"
                />
              </div>
              <div className="w-full">
                <Img
                  src="images/img_placeholder_image_357x451.png"
                  alt="placeholder"
                  className="h-[357px] w-full rounded-[48px] object-cover md:h-auto"
                />
                <Img
                  src="images/img_placeholder_image_5.png"
                  alt="placeholder"
                  className="mt-2.5 h-[397px] w-full rounded-[48px] object-cover md:h-auto"
                />
                <div className="mt-2.5 flex flex-col gap-[181px] md:gap-[135px] sm:gap-[90px]">
                  <Img
                    src="images/img_placeholder_image_6.png"
                    alt="placeholder"
                    className="h-[21px] rounded-[10px] object-cover"
                  />
                  <Img
                    src="images/img_placeholder_image_7.png"
                    alt="placeholder"
                    className="h-px object-cover"
                  />
                </div>
                <Img
                  src="images/img_placeholder_image_8.png"
                  alt="placeholder"
                  className="mt-[385px] h-px w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-bl-[32px] rounded-br-[32px] bg-gradient1 pb-[245px] md:pb-5">
              <div>
                <div className="flex flex-col items-center gap-16 pt-12 md:pt-5 sm:gap-8">
                  <div className="flex flex-col items-center gap-4 self-stretch px-[131px] md:px-5">
                    <Text
                      size="3xl"
                      as="p"
                      className="bg-gradient2 bg-clip-text text-center !font-rockwell leading-[120%] !text-transparent"
                    >
                      AWS Community Day Ulaanbaatar 2024
                    </Text>
                    <Text
                      size="lg"
                      as="p"
                      className="text-center leading-[150%]"
                    >
                      <span className="text-blue_gray-50">
                        Join the second&nbsp;
                      </span>
                      <span className="text-orange-A200">
                        AWS Community Day in Ulaanbaatar!&nbsp;
                      </span>
                      <span className="text-blue_gray-50">
                        Engage with cloud experts, explore advanced topics, and
                        network with like-minded individuals. Enhance your cloud
                        skills at this special event!
                      </span>
                    </Text>
                    <div className="flex w-[37%] gap-4 md:w-full">
                      <div className="gray_400_7f_blue_gray_400_7f_border flex w-full flex-col items-center justify-center gap-[15px] rounded-[16px] border-2 border-solid bg-gray-100_19 p-4">
                        <Text
                          size="xl"
                          as="p"
                          className="mt-1 text-center !font-rubik !text-orange-A200"
                        >
                          51
                        </Text>
                        <Text size="xs" as="p" className="text-center">
                          Days
                        </Text>
                      </div>
                      <div className="gray_400_7f_blue_gray_400_7f_border flex w-full flex-col items-center justify-center gap-3.5 rounded-[16px] border-2 border-solid bg-gray-100_19 p-[17px]">
                        <Text
                          size="xl"
                          as="p"
                          className="mt-0.5 text-center !font-rubik !text-orange-A200"
                        >
                          20
                        </Text>
                        <Text size="xs" as="p" className="text-center">
                          Hours
                        </Text>
                      </div>
                      <div className="gray_400_7f_blue_gray_400_7f_border flex flex-col items-center justify-center gap-3.5 rounded-[16px] border-2 border-solid bg-gray-100_19 p-[17px]">
                        <Text
                          size="xl"
                          as="p"
                          className="mt-[3px] text-center !font-rubik !text-orange-A200"
                        >
                          41
                        </Text>
                        <Text size="xs" as="p" className="text-center">
                          Minutes
                        </Text>
                      </div>
                      <div className="gray_400_7f_blue_gray_400_7f_border flex flex-col items-center justify-center gap-3.5 rounded-[16px] border-2 border-solid bg-gray-100_19 p-4">
                        <Text
                          size="xl"
                          as="p"
                          className="mt-1 h-[38px] text-center !font-rubik !text-orange-A200"
                        >
                          14
                        </Text>
                        <Text size="xs" as="p" className="text-center">
                          Seconds
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      color="orange_A200_cc"
                      size="sm"
                      variant="fill"
                      shape="round"
                      className="min-w-[129px] border border-yellow-50 sm:px-5"
                    >
                      Register
                    </Button>
                    <Button
                      color="gray_100_19"
                      size="sm"
                      variant="fill"
                      shape="round"
                      className="gray_200_7f_blue_gray_400_7f_border min-w-[149px] border sm:px-5"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex bg-gray-900 p-8 sm:p-5">
          <div className="mx-auto my-20 flex w-full max-w-[1376px] rounded-bl-[32px] rounded-br-[32px] bg-gradient md:p-5">
            <div className="flex w-full justify-between gap-5 rounded-bl-[32px] rounded-br-[32px] md:flex-col">
              <div className="flex w-[48%] flex-col gap-8 pb-4 pl-4 md:w-full">
                <Text
                  size="xl"
                  as="p"
                  className="text-center leading-[150%] !text-gray-700"
                >
                  Mongolia is known as the &#39;Land of Eternal Blue Sky,&#39;
                  and its tech scene shows great promise. Don&#39;t just take
                  our word for it; join us!{" "}
                </Text>
                <Text
                  size="xl"
                  as="p"
                  className="text-center leading-[150%] !text-gray-100"
                >
                  Thousands of cloud enthusiasts will gather to discuss advanced
                  cloud technology.{" "}
                </Text>
                <Text
                  size="xl"
                  as="p"
                  className="mb-44 text-center leading-[150%] !text-gray-100"
                >
                  This time, we&#39;re organizing our second-largest cloud event
                  in the capital city of Ulaanbaatar.
                </Text>
              </div>
              <Img
                src="images/img_placeholder_lightbox.png"
                alt="placeholder"
                className="h-[736px] w-[48%] rounded-br-[32px] rounded-tr-[32px] object-cover md:w-full"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center gap-20 bg-gray-900 px-14 py-16 md:gap-[60px] md:p-5 sm:gap-10">
          <div className="mx-auto mt-[42px] flex w-full max-w-[1312px] flex-col items-center self-stretch">
            <Text
              size="3xl"
              as="p"
              className="relative z-[1] bg-gradient2 bg-clip-text text-center !font-rockwell !text-transparent"
            >
              Speakers
            </Text>
            <div className="relative mt-[-71px] flex justify-center self-stretch px-14 pt-[93px] md:px-5 md:pt-5">
              <Text
                size="lg"
                as="p"
                className="w-[79%] text-center leading-[150%]"
              >
                <span className="text-blue_gray-50">Join the second&nbsp;</span>
                <span className="text-orange-A200">
                  AWS Community Day in Ulaanbaatar!&nbsp;
                </span>
                <span className="text-blue_gray-50">
                  Engage with cloud experts, explore advanced topics, and
                  network with like-minded individuals. Enhance your cloud
                  skills at this special event!
                </span>
              </Text>
            </div>
          </div>
          <div className="mx-auto mb-12 grid w-full max-w-[1312px] grid-cols-[repeat(auto-fill,_minmax(400px_,_1fr))] justify-center gap-14 self-stretch">
            <FinalCard className="flex w-full flex-col gap-6" />
            <FinalCard1 className="flex w-full flex-col gap-6" />
            <FinalCard1
              unsplash3tll="images/img_unsplash_3tll_97hnjo_1.png"
              name="Marvin McKinney"
              jobtitle="Big Kahuna Burger Ltd."
              className="flex w-full flex-col gap-6"
            />
            <FinalCard1
              unsplash3tll="images/img_unsplash_3tll_97hnjo_2.png"
              name="Courtney Henry"
              jobtitle="Acme Co."
              className="flex w-full flex-col gap-6"
            />
            <FinalCard1
              unsplash3tll="images/img_unsplash_3tll_97hnjo_3.png"
              name="Jerome Bell"
              jobtitle="Barone LLC."
              className="flex w-full flex-col gap-6"
            />
            <FinalCard1
              unsplash3tll="images/img_unsplash_3tll_97hnjo_4.png"
              name="Ronald Richards"
              jobtitle="Abstergo Ltd."
              className="flex w-full flex-col gap-6"
            />
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center gap-[84px] bg-gray-900 px-14 py-16 md:gap-[63px] md:p-5 sm:gap-[42px]">
          <div className="mx-auto mt-[43px] flex w-full max-w-[1312px] justify-center px-[386px] md:px-5">
            <Text
              size="3xl"
              as="p"
              className="bg-gradient2 bg-clip-text text-center !font-rockwell !text-transparent"
            >
              Organizing team
            </Text>
          </div>
          <div className="mx-auto mb-12 flex w-full max-w-[1312px] gap-14 self-stretch md:flex-col">
            <FinalCard className="flex w-full flex-col gap-6" />
            <FinalCard1 className="flex w-full flex-col gap-6" />
            <FinalCard1
              unsplash3tll="images/img_unsplash_3tll_97hnjo_1.png"
              name="Marvin McKinney"
              jobtitle="Big Kahuna Burger Ltd."
              className="flex w-full flex-col gap-6"
            />
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center gap-[91px] bg-gray-900 px-14 py-16 md:gap-[68px] md:p-5 sm:gap-[45px]">
          <div className="mx-auto mt-9 flex w-full max-w-[1312px] flex-col items-center self-stretch">
            <Text
              size="3xl"
              as="p"
              className="relative z-[2] bg-gradient2 bg-clip-text text-center !font-rockwell !text-transparent"
            >
              Schedules
            </Text>
            <div className="relative mt-[-65px] h-[65px] self-stretch" />
          </div>
          <FinalContainer className="white_A700_gray_500_00_border mx-auto mb-12 flex w-full max-w-[1312px] flex-col self-stretch rounded-[32px] border-2 border-solid bg-orange-100_19 md:p-5" />
        </div> */}
        {/* <div className="flex flex-col items-center gap-[85px] bg-gray-900 px-14 py-16 md:gap-[63px] md:p-5 sm:gap-[42px]">
          <div className="mx-auto mt-[42px] flex w-full max-w-[1312px] flex-col items-center self-stretch">
            <Text
              size="3xl"
              as="p"
              className="relative z-[3] bg-gradient2 bg-clip-text text-center !font-rockwell !text-transparent"
            >
              Sponsors
            </Text>
            <div className="relative mt-[-71px] h-[71px] self-stretch" />
          </div>
          <div className="mx-auto mb-12 flex w-full max-w-[1312px] flex-col gap-20 self-stretch">
            <div className="flex flex-1 flex-col items-center gap-7 pt-[5px]">
              <Text
                size="2xl"
                as="p"
                className="bg-gradient3 bg-clip-text text-center !text-transparent"
              >
                Diamond
              </Text>
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex gap-12 px-[116px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack_one"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
                <div className="flex gap-12 px-[210px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-7 pt-[5px]">
              <Text
                size="2xl"
                as="p"
                className="bg-gradient4 bg-clip-text text-center !text-transparent"
              >
                Gold
              </Text>
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex gap-12 px-[116px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack_one"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
                <div className="flex gap-12 px-[210px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-6 pt-2.5">
              <Text
                size="2xl"
                as="p"
                className="bg-gradient5 bg-clip-text text-center !text-transparent"
              >
                Digital
              </Text>
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex gap-12 px-[116px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack_one"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
                <div className="flex gap-12 px-[210px] md:flex-col md:px-5">
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_relume_black.png"
                    alt="relumeblack"
                    className="h-[56px] w-full object-cover"
                  />
                  <Img
                    src="images/img_webflow_black.png"
                    alt="webflowblack"
                    className="h-[56px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <footer className="bg-gray-900 p-12 md:p-5">
          <div className="mt-14 flex flex-col gap-[83px] md:gap-[62px] sm:gap-[41px]">
            <a href="#">
              <div>
                <div className="flex flex-col items-center">
                  <Text
                    size="3xl"
                    as="p"
                    className="relative z-[4] bg-gradient2 bg-clip-text text-center !font-rockwell !text-transparent"
                  >
                    FAQs
                  </Text>
                  <div className="relative mt-[-69px] h-[69px] self-stretch" />
                </div>
              </div>
            </a>
            <div className="flex gap-6 md:flex-col">
              <div className="relative h-[366px] w-[40%] md:h-auto md:w-full">
                <Img
                  src="images/img_image_27.png"
                  alt="imagetwentyseve"
                  className="h-[366px] w-full rounded-lg object-cover"
                />
                <Img
                  src="images/img_ci_location.svg"
                  alt="cilocation_one"
                  className="absolute bottom-0 right-[43%] top-0 my-auto h-[41px] w-[41px]"
                />
              </div>
              <div className="flex-1 md:self-stretch">
                <div>
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                        className="h-[32px] w-[32px]"
                      />
                    }
                    name="question"
                    placeholder={`Question text goes here`}
                    options={dropDownOptions}
                    className="gap-px font-bold sm:py-5 sm:pr-5"
                  />
                </div>
                <div>
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                        className="h-[32px] w-[32px]"
                      />
                    }
                    name="question_one"
                    placeholder={`Question text goes here`}
                    options={dropDownOptions}
                    className="gap-px font-bold sm:py-5 sm:pr-5"
                  />
                </div>
                <div>
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                        className="h-[32px] w-[32px]"
                      />
                    }
                    name="question_two"
                    placeholder={`Question text goes here`}
                    options={dropDownOptions}
                    className="gap-px font-bold sm:py-5 sm:pr-5"
                  />
                </div>
                <div>
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                        className="h-[32px] w-[32px]"
                      />
                    }
                    name="question_three"
                    placeholder={`Question text goes here`}
                    options={dropDownOptions}
                    className="gap-px font-bold sm:py-5 sm:pr-5"
                  />
                </div>
                <SelectBox
                  shape="square"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                      className="h-[32px] w-[32px]"
                    />
                  }
                  name="question_four"
                  placeholder={`Question text goes here`}
                  options={dropDownOptions}
                  className="gap-px border-b font-bold sm:py-5 sm:pr-5"
                />
              </div>
            </div>
            <div className="flex justify-center border-[0.5px] border-solid border-gray-400 px-4 pt-4">
              <div className="flex">
                <Heading size="xs" as="p" className="self-end !font-montserrat">
                  <span className="text-gray-100">2023 © Powered by&nbsp;</span>
                  <span className="text-red_A200">FIBO Cloud</span>
                </Heading>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}
