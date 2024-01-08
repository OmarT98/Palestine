import { arrowRight } from "../assets/icons";
import { dance } from "../assets/images";
import { Button } from "../components";

const SpecialStory = () => {
  return (
    <section
      id="special-story"
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-16 max-container"
    >
      <div className="flex-1">
        <img
          src={dance}
          alt="img dance"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-bebas tracking-[0.035em] text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-green">Special</span> Story
        </h2>
        <p className="mt-4 info-text">
          Every year on May 15, Palestinians around the world mark the Nakba, or
          catastrophe, referring to the ethnic cleansing of Palestine in 1948.
          Having secured the support of the British government for the creation
          of a Jewish state in Palestine, on May 14, 1948, as soon as the
          British Mandate expired, Zionist forces declared the establishment of
          the State of Israel, triggering the first Arab-Israeli war.
        </p>
        <p className="mt-6 info-text">
          Zionist military forces expelled at least 750,000 Palestinians from
          their homes and lands and captured 78 percent of historic Palestine.
          The remaining 22 percent was divided into what are now the occupied
          West Bank and the besieged Gaza Strip.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="The Story"
            iconURL={arrowRight}
            linko="https://www.youtube.com/watch?v=f0oy-NicIgE&ab_channel=NewMediaAcademyLife"
          />

          <Button
            label="Learn more 🍉"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            linko="https://www.youtube.com/watch?v=rqjO5Z9Lt_M&t=73s&ab_channel=PiersMorganUncensored"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialStory;
