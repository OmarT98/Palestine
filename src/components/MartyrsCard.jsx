import { watermelon } from "../assets/icons";

const MartyrsCard = ({ imgURL, name, age, marday }) => {
  return (
    <div className="flex flex-1 flex-col w-full  max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280] h-[280] rounded-2xl transition hover:scale-110"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={watermelon} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">
          {age}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-green leading-normal text-xl">
        {marday}
      </p>
    </div>
  );
};

export default MartyrsCard;
