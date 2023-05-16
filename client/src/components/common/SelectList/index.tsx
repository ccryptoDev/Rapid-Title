import React, { useState } from "react";
import SellerDropdown from "../SellerDropdown";
import DmvDropdown from "../DmvDropdown";
import LenderDropdown from "../LenderDropdown";
import PersonDropdown from "../PersonDropdown";

function SelectList() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const handleChange1 = () => {
        setIsOpen1(current => !current)
    }
    const handleChange = (event: any) => {
        setIsOpen(current => !current);
    }
    const handleChange2 = () => {
        setIsOpen2(current => !current);
    }
    const handleChange3 = () => {
        setIsOpen3(current => !current);
    }
    return (
        <div className="col-span-2 p-2 w-full">
            <div className="">
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Seller</h1>
                        <img src={require('../../../assets/img/Warning/Vector.png')} alt="" />
                    </div>
                    <div className="flex justify-between items-center  cursor-pointer">
                        <div className="flex items-center p-[15px] bg-[#FAFBFD]"  onClick={handleChange}>
                            <img src={require('../../../assets/img/Avatar/Avatar1.png')} alt="" />
                            <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Bob Smith</h3>
                            <img className="ps-8" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                        </div>
                        {
                            !isOpen &&
                            <button className="bg-[#333399] text-white font-bold py-2 px-4 ml-2 rounded inline-flex items-center" style={{ borderRadius: 4 }}>
                                <span className='mr-2'>Invite a Seller</span>
                                <img src={require('../../../assets/img/User/Vector.png')} alt="" />
                            </button>
                        }
                    </div>
                    {isOpen &&
                        <SellerDropdown />
                    }
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a DMV</h1>
                        <img src={require('../../../assets/img/Warning/Vector.png')} alt="" />
                    </div>
                    <div className="flex items-center p-[15px] cursor-pointer bg-[#FAFBFD]" onClick={handleChange1}>
                        <img src={require('../../../assets/img/Avatar/Avatar2.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Los Angeles DMV</h3>
                        <img className="pe-4" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                        <img className="ps-3" src={require('../../../assets/img/Filter.png')} alt="" />
                    </div>
                    {isOpen1 && (
                        <DmvDropdown />
                    )}
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Lender</h1>
                        <img src={require('../../../assets/img/Warning/Vector.png')} alt="" />
                    </div>
                    <div className="flex items-center p-[15px] cursor-pointer bg-[#FAFBFD]" onClick={handleChange2}>
                        <img src={require('../../../assets/img/Avatar/Avatar3.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>CAPITAL ONE AUTO FINANCE</h3>
                        <img src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                    </div>
                    {isOpen2 &&
                        <LenderDropdown />
                    }
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Salesperson</h1>
                        <img src={require('../../../assets/img/Warning/Vector.png')} alt="" />
                    </div>
                    <div className="flex items-center p-[15px] cursor-pointer" onClick={handleChange3}>
                        <img src={require('../../../assets/img/Avatar/Avatar4.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>James Maverick</h3>
                        <img className="pe-4" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                        <img className="ps-3" src={require('../../../assets/img/Filter.png')} alt="" />
                    </div>
                    {isOpen3 &&
                        <PersonDropdown />
                    }
                </div>
            </div>

        </div>
    )
}

export default SelectList;