import { watermelon } from "../assets/icons";

const HeroCard = ({ imgURL, heroName, rating, feedback, linkss }) => {
  return (
    <a href={linkss} target={`_blank`}>
      <div className="flex justify-center items-center flex-col transition hover:scale-110">
        <img
          src={imgURL}
          alt="customer rev."
          className="rounded-full object-cover w-[120px] h-[120px]"
        />

        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img
            src={watermelon}
            alt="watermelon"
            width={24}
            height={24}
            className="object-contain m-0"
          />

          <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
          {heroName}
        </h3>
      </div>
    </a>
  );
};

export default HeroCard;
