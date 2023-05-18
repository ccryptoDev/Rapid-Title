import React, { BaseSyntheticEvent, useState } from 'react';
import './index.view.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/img/avatar.png';

function HeaderBar({ toggleDrawer }: any) {
  const navigate = useNavigate();

  return (
    <div className="p-2 w-full">
      <div className="flex items-center justify-between">
        <div className="relative items-center flex w-[76%]">
          <input
            type="text"
            placeholder="Search for titles"
            className="bg-[#5C5CAD] w-full indent-5 h-14 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center text-white"
            style={{ borderRadius: 12 }}
          />
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            style={{ position: 'absolute', left: 10 }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875V13.875Z"
              fill="white"
            />
          </svg>
          <button
            className="bg-white absolute right-[-12px] hover:bg-grey text-grey-darkest font-bold py-3 px-4 rounded inline-flex items-center text-white"
            style={{ borderRadius: 12, border: '1px solid grey' }}
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 17.5H10.5M15.5 16.5H18.5M18.5 16.5H21.5M18.5 16.5V19.5M18.5 16.5V13.5M3.5 12.5H14.5M3.5 7.5H14.5"
                stroke="#B5B5BB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          className="bg-white hover:bg-grey text-grey-darkest font-bold py-3 px-4 rounded inline-flex items-center text-white"
          style={{ borderRadius: 12, border: '1px solid grey' }}
        >
          <svg
            width="30"
            height="31"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.89844 19.551V14.2381M1.89844 14.2381C7.71662 9.68874 12.0803 18.7873 17.8984 14.2379V2.8645C12.0803 7.41387 7.71662 -1.68508 1.89844 2.86429V14.2381Z"
              stroke="#B5B5BB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="bg-white hover:bg-grey text-grey-darkest font-bold py-3 px-4 rounded inline-flex items-center text-white"
          style={{ borderRadius: 12, border: '1px solid grey' }}
        >
          <svg
            width="30"
            height="31"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0488 17.4075H22.0488V19.4075H2.04883V17.4075H4.04883V10.4075C4.04883 8.28574 4.89168 6.25091 6.39197 4.75062C7.89226 3.25033 9.9271 2.40747 12.0488 2.40747C14.1706 2.40747 16.2054 3.25033 17.7057 4.75062C19.206 6.25091 20.0488 8.28574 20.0488 10.4075V17.4075ZM18.0488 17.4075V10.4075C18.0488 8.81617 17.4167 7.29005 16.2915 6.16483C15.1663 5.03961 13.6401 4.40747 12.0488 4.40747C10.4575 4.40747 8.93141 5.03961 7.80619 6.16483C6.68097 7.29005 6.04883 8.81617 6.04883 10.4075V17.4075H18.0488ZM9.04883 21.4075H15.0488V23.4075H9.04883V21.4075Z"
              fill="#A6A9B3"
            />
          </svg>
        </button>
        <button
          className="bg-white hover:bg-grey -grey-darkest font-bold py-2 px-4 rounded inline-flex items-center text-[#666873]"
          style={{ borderRadius: 12, border: '1px solid grey' }}
          onClick={() => toggleDrawer()}
        >
          <span>WalletName </span>
          <img src={avatar} className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
