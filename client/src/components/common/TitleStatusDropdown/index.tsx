import React from "react";

function TitleStatusDropdown({handler} : any) {
    return (
        <div className="bg-[#FAFBFD] p-[15px] absolute">
            {
                StateData.map((item, index) => (
                    <div key={index} className="flex items-center cursor-pointer my-4" onClick={() => handler(2,item.name)}>
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>{item.name}</h3>
                        <img className="pe-4" src={require('../../../assets/img/Avatar/info.png')} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

const StateData = [
    {
        name: 'Completed'
    },
    {
        name: 'Pending'
    },
]

export default TitleStatusDropdown;