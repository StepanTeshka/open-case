import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "./Select";

function Header() {
  const [selectState, setSelectState] = useState(`English`);

  const handleClick = (evt) => {
    setSelectState(evt.target.textContent);
  };
  const selectVariantButton = [
    {
      value: `english`,
      title: `English`,
      src: `/img/emojione-v1_flag-for-united-states.png`,
    },
    {
      value: `china`,
      title: `中国人`,
      src: `/img/китай.png`,
    },
  ];

  return (
    <header className="h-32 bg-[#080C11] px-[122px] flex items-center justify-between">
      <Select
        handleClick={handleClick}
        activeSelect={selectState}
        selectVariantButton={selectVariantButton}
        className
      />
      <div className="flex gap-[122px]">
        <Link to="/">
          <p className="text-white hover:opacity-60 cursor-pointer">Cases</p>
        </Link>
        <Link to="/awards">
          <p className="text-white hover:opacity-60 cursor-pointer">
            My awards
          </p>
        </Link>
        <Link to="leaders">
          <p className="text-white hover:opacity-60 cursor-pointer">Leaders</p>
        </Link>
      </div>
      <Link to="/auth/login">
        <button className="text-lg bg-[#273144] text-white px-14 py-2.5 rounded-lg border border-white">
          Login
        </button>
      </Link>
      {/* <div className="flex gap-3.5 items-center">
        <div className="h-20 w-20 flex justify-center items-center">
          <div className="rounded-full absolute z-50">
            <img src="/img/Ellipse 1.png" alt="avatar" />
          </div>
          <img src="/img/Group.png" alt="border" className="absolute" />
        </div>
        <p className="text-white opacity-60">Guy - game</p>
      </div> */}
    </header>
  );
}
export default Header;
