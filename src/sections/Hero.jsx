import { useState } from "react";
import { ImgCard } from "../components";
import { bigs, statistics } from "../constants";
import { big1 } from "../assets/images";

const Hero = () => {
  const [bigImage, setBigImage] = useState(big1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-coral-green">Our Hope</p> */}

        <h1 className="mt-1 font-mate text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 inline-block">
            Smiles That Gave Us{" "}
            <span className="text-coral-green inline-block  z-10 relative">
              Hope
            </span>
          </span>
        </h1>
        {/* <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          gjdlknjbgm,v,mv,v,nfckhgfckhgfkhgdhkgdhdhddmhhhh <br />
          kjg,jgjg,gkgjgjg <br /> jhgjhfjhfj
        </p> */}

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-5">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-2xl font-palanquin font-bold">
                {stat.value}{" "}
                <span className="leading-7 text-sm font-montserrat text-slate-gray">
                  {stat.quote}
                </span>
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigImage}
          alt="img collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:p-6 ">
          {bigs.map((bimg) => (
            <div key={bimg.thumbnail} className="transition hover:scale-125">
              <ImgCard
                imgURL={bimg}
                changeBigImage={(bimg) => setBigImage(bimg)}
                bigImage={bigImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
