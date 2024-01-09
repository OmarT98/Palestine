import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute bg-white z-50 w-full border-b-2 border-slate-grey">
      <nav className="flex justify-between items-center max-container">
        <a href="#home">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul
          id="primary-navigation"
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="flex justify-end max-container lg:hidden">
          <ul className=" bg-white justify-center items-center text-right right-7 absolute">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
