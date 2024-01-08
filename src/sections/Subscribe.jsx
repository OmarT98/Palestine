// import { Button } from "../components";

import { hug } from "../assets/images";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container tracking-wider flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className=" text-4xl lg:text-[70px] leading-[68px]  lg:max-w-md font-bebas tracking-[0.035em] font-bold">
        One Last
        <span className="text-coral-green"> Hug</span>!
      </h3>

      <img
        src={hug}
        alt="Last Hug"
        width={770}
        height={720}
        className="object-contain rounded-3xl "
      />
    </section>
  );
};

export default Subscribe;
