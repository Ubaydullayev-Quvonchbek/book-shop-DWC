import React from 'react';
import rightBoxImage from "../assets/ReadingBook.png";
import Text from '../reasuble/Text';

const Header = () => {
    return (
        <header>
            <div className="container px-6 m-auto bg-[#B9E6FF] rounded-[10px] mt-[20px]">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-7">
                        <div className="left-box px-[40px] flex items-center h-full">
                            <div className="box">
                                <Text class="text-[#1F1A2D] text-[36px] font-bold" text="Читай книги — маркетплейс книжных товаров" />
                                <Text class="text-[#333] text-[26px] font-normal my-[22.5px]" text="Сравнивайте цены и бронируйте книги в ближайших магазинах!" />
                                <button className='text-[#fff] text-[21px] font-bold py-[13px] px-[33px] inline-flex justify-center items-center gap-10px rounded-[5px] bg-[#1F1A2D]'>Войти</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="right-box overflow-hidden">
                            <img className='w-full h-full' src={rightBoxImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
