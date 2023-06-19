import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import './index.view.css';
import { useNavigate } from 'react-router-dom';
import { loadHoldingTitles1 } from 'store/actions/title';
import { loadHoldingTitles } from 'store/actions/title';
import HoldingStatusDropdown from '../HoldingStatusDropdown';
import { Console } from 'console';
import api from 'utils/api';


function TitleHolds() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedRow, setOpenedRow] = useState(-1);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleOpen = (index: any) => {
    setOpenedRow(index);
  }
  const handleClose = (datas: any) => {
    //title type
      // setTitleStatus(data);
      let update_id='';
      data.map((record:any, id: any)=>{
        if(id == openedRow)
          update_id = record._id;
      })
      const update_status = async () => {
        try {
          const res = await api.put(`/v2/holdingtitles/${update_id}`, {datas});
          console.log(res.data);
        } catch (err: any) {
          console.log(err);
        }
      };
      update_status();
      console.log(update_id);
      const cb = async () => {
        const data = await loadHoldingTitles();
        console.log(data);
        //@ts-ignore
        setData(data);
      };
      cb();
      setTimeout(() => {
        setOpenedRow(-1);
      }, 100);
  }
  useEffect(() => {
    const cb = async () => {
      let data1 = await loadHoldingTitles();
      if(data1 && data1.length == 0){
        data1 = await loadHoldingTitles1();
      }
      //@ts-ignore
      setData(data1);
    };
    cb();
  },[])
  console.log(data);

  return (
    <div className="p-2 max-h-[680px] overflow-y-scroll w-full">
      <div className='title-body p-2'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-[#333399]">
                <thead className="text-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Hold
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Responsible
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Days
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Notes
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Select
                        </th>
                    </tr>
                </thead>
                <tbody className='text-[#212133]'>
                  {
                    data.map((record:any,index:any) => {
                      return <tr className={index%2 === 0 ? `bg-[#D6D6EB]`:''}>
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap flex items-center">
                                    <div>
                                      <img src={record.status === '0'?'/hold_pending.png':'/hold_complete.png'} style={{width:42,height:40}}/>
                                    </div>
                                    <div className='ml-5'>
                                      <p className={record.status === '0' ? 'text-[#FF3366] text-sm' : 'text-[#333399] text-sm'}>{record.status === '0' ? 'Pending' : 'Completed'}</p>
                                      <p className='text-lg'> {record.hold}</p>
                                    </div>
                                </th>
                                <td className="px-4 py-4 text-lg relative">
                                  {record.status === '0' ? <div className='pending-badge cursor-pointer  rounded-md bg-[#FF3366] text-center text-white' onClick={()=>handleOpen(index)}>Pending</div> : 
                                    <div className='pending-badge  rounded-md cursor-pointer bg-[#333399] text-center text-white' onClick={()=>handleOpen(index)}>Completed</div>}
                                  {
                                  index == openedRow &&
                                    <HoldingStatusDropdown handler = {handleClose} holdstatus = {record.status} />
                                  }
                                </td>
                                
                                <td className="px-6 py-4 text-lg">
                                  {
                                    record.status === '0' ? <div className='pending-badge flex justify-center py-1 px-2 rounded-md bg-[#FF3366] text-center text-white w-fit'>
                                                            <img src={record.responsible_image} style={{width:24,height:24}}/>  
                                                            <span className='ml-2'>{record.responsible_description}</span>
                                                          </div> : 
                                                          <div className='flex'>
                                                            <img src={record.responsible_image} style={{width:24,height:24}}/>  
                                                            <span className='ml-2'>{record.responsible_description}</span>
                                                          </div>
                                  }
                                </td>
                                <td className="px-6 py-4 text-lg">
                                  {
                                    record.status === '0' ? 
                                      <div className='pending-badge flex justify-center py-1 px-2 rounded-md bg-[#FF3366] text-center text-white w-fit'>
                                        {record.days} Days
                                      </div> : 
                                      <div>
                                          {record.days} Days
                                      </div>
                                  }
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {
                                      record.notes ? <img src='/note_new.svg'/> : <img src='/note_edit.svg' style={{color:'white'}}/>
                                    }
                                </td>
                                <td className="py-4 px-0 pr-3 text-lg text-center">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </td>
                                
                            </tr>
                    })
                  }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default TitleHolds;
