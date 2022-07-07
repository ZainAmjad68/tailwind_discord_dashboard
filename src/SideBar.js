import React from 'react';
import { BsPlus, BsFillLightbulbFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg'>
            
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightbulbFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className='sidebar-icon group'>
        {icon}

        <span class='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

export default SideBar;