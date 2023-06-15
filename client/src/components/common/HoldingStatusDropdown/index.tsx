import React from 'react';
import { useOutsideClick } from "../SelectList/useOutsideClick";

function HoldingStatusDropdown({handleClose, holdestatus} : any) {
  const ref = useOutsideClick(()=>{
    handleClose(holdestatus);
  })
  return (
    <div className="bg-[#FAFBFD] p-[15px] absolute" ref={ref}>
      <p className="text-[12px] font-sans" style={{ color: '#97A3B7' }}>
        Status
      </p>
      {PersonData.map((item, index) => (
        <div key={index} className="flex items-center cursor-pointer my-4" onClick={() => handleClose(4,item)}>
          <h3
            className="px-2 flex-1 text-white"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            {item.text}
          </h3>
        </div>
      ))}
    </div>
  );
}

const PersonData = [
  {
    text: 'Pending'
  },
  {
    text: 'Completed'
  }
];

export default HoldingStatusDropdown;
