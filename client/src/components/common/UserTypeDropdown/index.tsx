import React from "react";

function UserTypeDropdown({type, setType, close} : any) {
    return (
        <div className="bg-[#FAFBFD] absolute">
            <div className="flex flex-col items-center cursor-pointer my-4">
                <div className="hover:bg-[gray] hover:text-white px-10 py-3 flex-1 text-black" onClick={() => {setType(0); close()}}> <h3  style={{ fontSize: '16px', fontWeight: 600 }}> Dealer</h3></div>
                <div className="hover:bg-[gray] hover:text-white px-10 py-3 flex-1 text-black" onClick={() => {setType(1); close()}}> <h3  style={{ fontSize: '16px', fontWeight: 600 }}> Seller</h3></div>
                <div className="hover:bg-[gray] hover:text-white px-10 py-3 flex-1 text-black" onClick={() => {setType(2); close()}}> <h3  style={{ fontSize: '16px', fontWeight: 600 }}> DMV</h3></div>
                <div className="hover:bg-[gray] hover:text-white px-10 py-3 flex-1 text-black" onClick={() => {setType(3); close()}}> <h3  style={{ fontSize: '16px', fontWeight: 600 }}> Lender</h3></div>
            </div>
        </div>
    )
}

export default UserTypeDropdown;