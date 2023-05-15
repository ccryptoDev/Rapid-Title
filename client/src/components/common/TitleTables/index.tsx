import React, { BaseSyntheticEvent, useState } from 'react';
import './index.view.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { KeyIcon } from 'components/Key';
import multiIcon from 'assets/img/multi_select.svg';
import CO from 'assets/img/capital_one.png';
import LA from 'assets/img/LA.png';


function TitleTables({viewMode,data, changeView}: any) {
  const navigate = useNavigate();

  return (
    <div className="p-2 max-h-[680px] overflow-y-scroll w-full">
      <div className='title-header flex'>
          <div className='flex-1 flex'>
            <span style={{fontSize:30}}>TitleVault</span>
            <KeyIcon />
          </div>
          <div>
            {
              viewMode === 'card' ?  
              (<button className="bg-[#FF3366] text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{borderRadius:4}} onClick={() => changeView()}>
                  <span className='mr-2'>List View</span>
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11.005H15M5 6.005H15M5 1.005H15M1.00195 11.005V11.007L1 11.007V11.005H1.00195ZM1.00195 6.005V6.007L1 6.00696V6.005H1.00195ZM1.00195 1.005V1.007L1 1.00696V1.005H1.00195Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) :
              (<button className="bg-[#FF3366] text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{borderRadius:4}} onClick={() => changeView()}>
                  <span className='mr-2'>Card View</span>
                  <img src={multiIcon} className='cursor-pointer'/>
                </button>)
            }
            <button className="bg-[#FF3366] text-white font-bold py-2 px-4 ml-2 rounded inline-flex items-center" style={{borderRadius:4}}>
              <span className='mr-2'>Pending</span>
            </button>  
            <button className=" text-black font-bold py-2 px-4 ml-2 rounded inline-flex items-center" >
              <span className='mr-2'>Actions</span>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(180deg)'}}>
                <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>  
          </div>
      </div>
      <div className='title-body p-2'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-[#333399]">
                <thead className="text-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Verhicle Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Floor Plan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Days
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sales Person
                        </th>
                        <th scope="col" className="px-6 py-3">
                            DMV
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Select
                        </th>
                    </tr>
                </thead>
                <tbody className='text-[#212133]'>
                  {
                    data.map((title:any,index:any) => {
                      return <tr className={index%2 === 0 ? `bg-[#D6D6EB]`:''}>
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap flex items-center">
                                    <div>
                                      <img src={title.image} style={{borderRadius:50,width:42,height:40}}/>
                                    </div>
                                    <div className='ml-5'>
                                      <p className='text-[#333399] text-sm'>Automobile</p>
                                      <p className='text-lg'> {title.title}</p>
                                    </div>
                                </th>
                                <td className="px-6 py-4 text-lg">
                                    {title.price}
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {title.floorPlan}
                                </td>
                                <td className="px-6 py-4 text-lg">
                                    {title.number}
                                </td>
                                <td className="pl-1 py-1 px-0 text-lg">
                                    <div className='bg-[#333399]  h-full px-3 py-4 status-bg'>
                                      <div className='bg-[#FF3366] text-white rounded-md text-center'> Pending 6/10</div>
                                    </div>
                                </td>
                                <td className="py-4 px-0 text-lg">
                                  <div className='bg-[#333399]  h-full px-3 py-4'>
                                      <div className='bg-[#FF3366] text-white rounded-md text-center'> {title.duration}</div>
                                    </div>
                                </td>
                                <td className="py-4 px-0 text-lg">
                                    <div className='bg-[#333399] flex h-full px-3 py-2 items-center'>
                                      <img src={title.observer} className='observer-avatar' alt="observer_avatar"/>
                                      <span className='text-white ml-2'>{title.observer_name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-0 text-lg">
                                    <div className='bg-[#333399] px-3 py-[19px] pt-[18px]'>
                                      <img src={CO} className='cursor-pointer'/>
                                    </div>
                                </td>
                                <td className="py-4 px-0 text-lg">
                                    <div className='bg-[#333399] px-3 py-[19px]'>
                                      <img src={LA} className='cursor-pointer'/>
                                    </div>
                                </td>
                                <td className="py-4 px-0 pr-3 text-lg">
                                    <div className='bg-[#333399] h-full px-3 py-[16px] border-bg'>
                                      <div className="flex items-center justify-center">
                                        <div className='bg-[white] px-3'>
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </div>
                                      </div>
                                    </div>
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

export default TitleTables;
