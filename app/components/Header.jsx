import React from "react";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-7 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className=" flex gap-1 items-center">
        <DarkModeSwitch />
        <Link href= '/' >
        <span className="text-2xl font-bold bg-amber-600 hover:bg-amber-500 py-1 px-2 rounded-lg">Netflow</span>
        </Link>
        <span className="text-xl hidden sm:inline" >Web</span>
      </div>
    </div>
  );
};

export default Header;
