import React from "react";
import logo from "../../assets/img/logo.svg";
import n1 from "../../assets/img/n1.svg";
import n2 from "../../assets/img/n2.svg";
import { MyButton } from "../../utils/Constants";

function Navbar() {
  return (
    <nav className="container mx-auto mt-5 px-[50px] py-[10px]">
      <div className="flex mb-[5px]">
        <img className="lo cursor-pointer" src={logo} alt="" />
        <button className="ml-[24px] mr-[124px] inline-flex h-[45px] w-[114px] items-center mt-1 justify-center gap-2 whitespace-nowrap rounded border border-gray-500 px-6 text-sm font-medium tracking-wide text-light-500 transition duration-300 hover:border-light-600 hover:text-light-600 focus:border-light-700 focus:text-light-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-light-300 disabled:text-light-300 disabled:shadow-none">
          <span>Каталог</span>
        </button>
        <input
          className="w-[505px] mt-1 h-[45px] bg-color-[#2B2244] pl-10 rounded-[5px] text-10"
          type="text"
          placeholder="Поиск"
        />
        <img className="ml-[78px] mr-[40px] cursor-pointer" src={n1} alt="" />
        <img className="cursor-pointer" src={n2} alt="" />
        <button className="w-[107px] h-[45px] mt-1 rounded-[5px] text- bg-light-700 ml-[40px]">
          Войти
        </button>
      </div>

      <div className="mt-[20px]">
        {MyButton?.map((item) => {
          return (
            <button className="text-light-500 mx-[5px] text-[13px] pt-[6px] pl-[16px] pb-[6px] pr-[16px] rounded-[10px] border border-light-50">
              {item?.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
