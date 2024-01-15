import  { children, useState } from 'react'
import { MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { IoNotificationsOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";

import { FaRegUser  } from "react-icons/fa"

 const Sidebar = ({children}) =>{
    const[isOpen, setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:""
        },
        {
            path:"/register",
            name:"Register",
            icon:<FaRegUser/>
        },
        {
            path:"/announcement",
            name:"Announcement",
            icon:<IoNotificationsOutline/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<FaUser/>
        },
        {
            path:"/citizen",
            name:"Citizen",
            icon: <RiGroupLine />

        },
        {
            path:"/generateReport",
            name:"Generatereport",
            icon: <BsBarChartLineFill />
        },
    ]
  return (
    
    <div className='container'>
        <div className="sidebar">
            <div className="topsection">
                <h1 style={{display: isOpen ? "block" : "none"}}  className='logo'>Logo</h1>
                <div   className="bars">
                <MdMenu onClick={toggle}  className='menu'/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div  className="linktext">{item.name}</div>
                </NavLink>  
                ))
            }
        </div>
        <main>{children}</main>
        
    </div>
  )
}
export default Sidebar;
