import React from 'react';
import { useOutsideClick } from "../SelectList/useOutsideClick";

// function HoldingStatusDropdown({handler, holdestatus} : any) {
//   const ref = useOutsideClick(()=>{
//     handler(holdestatus);
//   })
//   return (
//     <>
//       {holdestatus=== '1' ? <div className='pending-badge text-lg rounded-md absolute bg-[#FF3366] text-center text-white' onClick={()=>handler('0')}>Pending</div> : 
//         <div className='pending-badge text-lg rounded-md bg-[#333399] text-center absolute text-white' onClick={()=>handler('1')}>Completed</div>
//       }
//     </>
//   );
// }
function HoldingStatusDropdown(props: any) {
  const ref = useOutsideClick(()=>{
    props.handler(props.holdstatus);
    })
  return (
      <div className="bg-[#FAFBFD] px-[6px] absolute z-10 rounded-lg" ref = {ref}>
          {
              StateData.map((item, index) => (
                  <div key={index} className="flex items-center cursor-pointer" onClick={() => props.handler(item.name)}>
                        <h3 className="px-2 flex-1 text-black " style={{ fontSize: '16px', fontWeight: 600 }}>{item.name === '1' ? 'Completed' : 'Pending'}</h3>
                  </div>
              ))
          }
      </div>
  )
}

const StateData = [
  {
      name: '1'
  },
  {
      name: '0'
  },
]


export default HoldingStatusDropdown;
