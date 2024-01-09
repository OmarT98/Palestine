import { heross } from "../constants";
import { HeroCard } from "../components";

const HeroRev = () => {
  return (
    <section className="max-container">
      <h3 className="text-center text-4xl font-bold font-bebas tracking-[0.035em]">
        What Our
        <span className="text-coral-green"> Heroes </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Over 20K Palestinians in Gaza have been killed, around 70% of whom were
        women and children, while about 50K+ others have been injured. Many more
        are missing and feared to be trapped underneath the rubble; “entire
        families” have been wiped out.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {heross.map((rev) => (
          <HeroCard
            key={rev.heroName}
            imgURL={rev.imgURL}
            heroName={rev.heroName}
            rating={rev.rating}
            feedback={rev.feedback}
            linkss={rev.linkss}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroRev;
