import React, { BaseSyntheticEvent, useState } from 'react';
import './index.view.css';
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar';
import HeaderBar from '../HeaderBar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function TitleStatus({ data, id }: any) {
  return (
    <div className='p-[60px] rounded-xl flex w-[80%] h-[70%] m-[60px] items-center relative' style={{boxShadow: "rgba(0, 0, 0, 0.25) 1px 7px 6px 2px"}}>
        <img src='/qr_code_lg.png' width={373} height={373}/>
        <div className='ml-[21px] '>
          <p className='mb-[28px]' style={{fontSize:30}}>Hyundai Tucson</p>
          <p className='mb-[9px]' style={{fontSize:16}}>Inventory Number: K9127A</p>
          <p className='mb-[9px]' style={{fontSize:16}}>Vehicle Number: K72F40K7F240FK</p>
          <p className='mb-[9px]' style={{fontSize:16}}>DMV: Los Angeles, California </p>
          <div className='pending-badge w-[71px] h-[28px] rounded-md bg-[#FF3366] text-center text-white'>Pending</div>
        </div>
        <div className='absolute bottom-[37px] right-[37px] flex'>
            <div className='pending-badge p-[5px] flex justify-center items-center h-[44px] w-[131px] rounded-md bg-[#FFED49] text-[#333399] text-center' style={{fontWeight:800}}>
              <span> Share QR</span>
              <img src='/share_iOS_export.png' width={20} className='h-[20px]' />
            </div>
            <div className='pending-badge ml-[37px] p-[5px] flex justify-center items-center h-[44px] w-[131px] rounded-md bg-[#FF3366] text-white text-center' style={{fontWeight:800}}>
              <span> Download QR</span>
            </div>
        </div>
    </div>
  );
}
