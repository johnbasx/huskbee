import React from "react";
import { BiDonateHeart, BiMusic } from "react-icons/bi";
import { RiMotorbikeFill, RiFootballFill } from "react-icons/ri";

import { TbAffiliate, TbBook2, TbCalendarEvent, TbMovie } from "react-icons/tb";
import { IconType } from "react-icons";
import Image from "next/image";

type MenuCardWrapperProps = {
  children: React.ReactNode;
};

const MenuCard = () => {
  const MenuCardWrapper = ({ icon: Icon }: { icon: IconType }) => (
    <button className="p-3 bg-zinc-800/50 border border-zinc-500/10 rounded-2xl flex justify-center items-center duration-300 cursor-pointer hover:bg-zinc-700/50 ">
      <Icon className="h-8 w-8" />
    </button>
  );

  return (
    <div className="relative w-full px-3">
      <div className="w-full p-5 overflow-hidden backdrop-blur-xl rounded-3xl bg-zinc-900/50 border-zinc-800/50 border">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 w-full ">
          <MenuCardWrapper icon={TbMovie} />
          <MenuCardWrapper icon={TbCalendarEvent} />
          <MenuCardWrapper icon={BiMusic} />
          <MenuCardWrapper icon={TbAffiliate} />
          <MenuCardWrapper icon={TbBook2} />
          <MenuCardWrapper icon={RiMotorbikeFill} />
          <MenuCardWrapper icon={BiDonateHeart} />
          <MenuCardWrapper icon={RiFootballFill} />
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-colofulLogo h-screen blur-3xl pointer-events-none opacity-50"></div>
      </div>
    </div>
  );
};

export default MenuCard;
