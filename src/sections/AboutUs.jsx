import { img8 } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-bebas tracking-[0.035em] text-4xl capitalize font-bold lg:max-w-lg">
          It is in our <span className="text-coral-green">Hands </span>to make a
          <span className="text-coral-green"> Difference</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          I am a Web Developer, At this project I tried to tell what is
          happening in Gaza. You will see the Heros, Martyrs, Stories and
          Smiles. Never be afraid to raise your voice for honesty and truth and
          compassion against injustice and lying and greed. If all people would
          do this, It would change the world.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          I used React JS and Tailwind CSS.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Linked In"
            linko="https://www.linkedin.com/in/omar-tabdeen/"
          />
          <Button
            label="GitHub"
            iconURL={arrowRight}
            linko="https://github.com/OmarT98"
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={img8}
          alt="img8"
          width={570}
          height={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default AboutUs;
