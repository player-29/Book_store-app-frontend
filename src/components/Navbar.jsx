import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatarImg from "../assets/avatar.png";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
const navigation=[
    {name: "Dashboard", href:"/dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"}
]

export const Navbar = () => {
    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    const cartItems=useSelector(state=>state.cart.cartItems);
    // console.log(cartItems);
    
    const{currentUser, logoutUser}=useAuth();
    const handleLogOut=()=>{
        logoutUser();
    }
    
    // console.log(isDropdownOpen);
  return (
    <header className="max-w-screen-2x1 mx-auto px-4 py-6">
        <nav className= "flex justify-between items-center">
            <div className="flex items-centermd:gap-16 gap-4">
                <Link to="/">
                <HiBars3CenterLeft className="size-6" />
                </Link>
            

            <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input type="text" placeholder="Search for books" className= "bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
            </div>
            </div>



           {/*right side of the navbar*/}
            <div className="relative flex items-center  md:space-x-3 space-x-2">
                <div  >
                    {
                    currentUser?<>
                    <button onClick={()=>setIsDropdownOpen(!isDropdownOpen) }>
                        <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' :''}`}/>
                    </button>
                    {/*dropdown*/}
                    {isDropdownOpen && 
                    <div className="absolute top-14 right-0 bg-white shadow-md w-48 py-2 rounded-md">
                        <ul className= "py-2">
                        {navigation.map((item, index)=>(
                            <li onClick={()=> setIsDropdownOpen(false)}>
                            <Link key={index} to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {item.name}
                            </Link>
                            </li>
                        ))}

                        <li>
                            <button 
                            onClick={handleLogOut}
                            className=" w-full block text-left px-4 py-2 text-sm hover:bg-gray-100">
                                Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                    }
                    </>: <Link to="/login"><HiOutlineUser className="size-6" /> </Link>}
                </div>
                
                <button className="hidden sm:block">
                    <VscHeart className="size-6"/>
                    
                </button>
                
                <Link to='/cart' className="bg-primary p-1 sm:px-6 px -2 flex items-center rounded-sm">
                    <AiOutlineShoppingCart className=''/>
                    {
                        cartItems.length>0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>: 
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    }
                    
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
