import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import './index.view.css';
import { useNavigate } from 'react-router-dom';
import { loadHoldenTitles } from 'store/actions/title';
import HoldingStatusDropdown from '../HoldingStatusDropdown';


function TitleHolds() {
  const [isOpen, setIsOpen] = useState(false);
  const [holdingstate, setHoldingState] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const cb = async () => {
      const data = await loadHoldenTitles();
      console.log(data);
      //@ts-ignore
      setData(data);
    };
    cb();
  },[])

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
                                      <img src={record.status === 0?'/hold_pending.png':'/hold_complete.png'} style={{width:42,height:40}}/>
                                    </div>
                                    <div className='ml-5'>
                                      <p className={record.status === 0 ? 'text-[#FF3366] text-sm' : 'text-[#333399] text-sm'}>{record.status === 0 ? 'Pending' : 'Completed'}</p>
                                      <p className='text-lg'> {record.hold}</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4 text-lg cursor-pointer">
                                  {
                                    record.status === 0 ? <div className='pending-badge  rounded-md bg-[#FF3366] text-center text-white'>Pending</div> : 
                                    <div className='pending-badge  rounded-md bg-[#333399] text-center text-white'>Completed</div>
                                  }
                                </td>
                                
                                <td className="px-6 py-4 text-lg">
                                  {
                                    record.status === 0 ? <div className='pending-badge flex justify-center py-1 px-2 rounded-md bg-[#FF3366] text-center text-white w-fit'>
                                                            <img src={record.responsible.image} style={{width:24,height:24}}/>  
                                                            <span className='ml-2'>{record.responsible.description}</span>
                                                          </div> : 
                                                          <div className='flex'>
                                                            <img src={record.responsible.image} style={{width:24,height:24}}/>  
                                                            <span className='ml-2'>{record.responsible.description}</span>
                                                          </div>
                                  }
                                </td>
                                <td className="px-6 py-4 text-lg">
                                  {
                                    record.status === 0 ? 
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
