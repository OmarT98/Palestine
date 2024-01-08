import { matcard } from "../constants";
import { MartyrsCard } from "../components";
import { Button } from "../components";

const Martyrs = () => {
  return (
    <section id="matcard" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bebas tracking-[0.035em] font-bold">
          Our <span className="text-coral-green">Martyrs</span>
        </h2>
        <p className=" mt-2 font-montserrat text-slate-gray">
          O Allah, forgive them and have mercy on them. Be generous to them and
          wash them with water and snow and hail. Cleanse them of their
          transgressions as white cloth is cleansed of stains. Give them an
          abode better than their home. Take them into Paradise and protect them
          from the punishment of the grave, and from the punishment of Hell-fire
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            label="See more 🍉"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            linko="https://twitter.com/GazaMartyrs"
          />
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {matcard.map((mat) => (
          <MartyrsCard key={mat.name} {...mat} />
        ))}
      </div>
    </section>
  );
};

export default Martyrs;
