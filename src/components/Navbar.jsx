import React ,{useState} from "react";
import {FaBars, FaSearch, FaMoneyBill, 
    FaArrowDown, FaTruck, FaHeart, FaWallet
, FaProductHunt,FaInfo, FaUser, FaDonate} from 'react-icons/fa';
const Navbar = () => {
    // this is for menu bar 
     const [nav, setNav] = useState (false)


     return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
            {/* onClick */}
            <div onClick={()=> setNav(!nav)} className="cursor-pointer">
                <FaBars size={30}/>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                Best <span className="font-bold"> Eates </span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 
            rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">Delivery</p>
            <p className="p-2">Pick Up</p>
            </div> 
            </div>
            {/* Search InPut */}

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
               <FaSearch size={20}/>
               <input className="bg-transparent p-2 
               focus:outline-none w-full" type="text" placeholder="Search Food"/>
            </div>
            <button className="bg-black rounded-full  text-white hidden md:flex items-center py-2">
                <FaMoneyBill size={20} className="mr-2"/> 
            Cart</button>
            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className="bg-black/80 fixed w-full z-10 h-screen top-10 left-0"></div> : ''}
            {/* Side drawer menu */}
            {/* onClick */}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300": 
            'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <FaArrowDown size={30} className="absolute right-4 top-4 cursor-pointer"
            onClick={()=> setNav(!nav)}/>
            <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex"><FaTruck size={25} className="mr-4"/>Orders</li>
                    <li className="text-xl py-4 flex"><FaHeart size={25} className="mr-4"/>Favorite</li>
                    <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4"/>Wallet</li>
                    <li className="text-xl py-4 flex"><FaInfo size={25} className="mr-4"/>Help</li>
                    <li className="text-xl py-4 flex"><FaProductHunt size={25} className="mr-4"/>Promotion</li>
                    <li className="text-xl py-4 flex"><FaDonate size={25} className="mr-4"/>Best Ones</li>
                    <li className="text-xl py-4 flex"><FaUser size={25} className="mr-4"/>Invite Friend</li>
                </ul>
            </nav>
            </div>
            </div>
     )
} 
export default Navbar;