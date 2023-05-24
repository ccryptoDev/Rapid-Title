import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import './index.view.css';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import HeaderBar from '../HeaderBar';
import Switcher from '../Switcher';
import Footer from '../Footer';
import DmvDropdown from '../DmvDropdown';
import InputTextField from '../SelectTables/InputTextField';

export default function Community() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [dmv, setDMV] = useState({name:'Los Angeles DMV',image:'Avatar2'});
  const handleChange1 = () => {
      setIsOpen1(current => !current)
  }
  const handleClose = (index : number, param: any) => {
    setDMV(param);
    setIsOpen1(false);
  }

  useEffect(() => {
    
  },[])

  return (
    <div className="">
      <div className="flex">
        <SideBar />
        <div className="w-full p-5">
          <HeaderBar />
          <div className='grid grid-cols-4 gap-1 p-[20px] overflow-x-auto overflow-y-hidden rounded-lg h-[760px] !mb-0 !pb-0 m-[40px]' style={{maxWidth: 'calc(100vw - 133px)',boxShadow:"rgba(0, 0, 0, 0.25) 1px 7px 8px 12px"}}>
            <div className='col-span-1 flex flex-col justify-center'>
              <div className='flex'>
                <div className='flex rounded-l-2xl w-[120px] p-[10px] text-white bg-[#5C5CAD] justify-center' style={{fontSize:16,fontWeight:700}}>
                  <Switcher />
                  <span>Chat</span>
                </div>
                <div className='flex p-[10px] w-[99px] text-[#FF4876]  justify-center' style={{fontSize:16,fontWeight:700}}>
                  <span>Titles</span>
                </div>
                <div className='flex p-[10px] w-[99px] text-[#5A6A9D]  justify-center' style={{fontSize:16,fontWeight:700}}>
                  <span>Groups</span>
                </div>
                <div className='flex rounded-r-2xl w-[99px] p-[10px] text-[#5A6A9D]  justify-center' style={{fontSize:16,fontWeight:700}}>
                  <span>People</span>
                </div>
              </div>
              <div className='mt-[40px]'>
                <div className='flex py-[8px] px-[12px]'>
                  <img src='/chat_avatar.png' alt='chat_avatar'/>
                  <div className='ml-[8px]'>
                    <div className='text-xl text-[#4848A4]'> Salespersons SCLA</div>
                    <div className='text-md text-[#7171B8]'> Sure, i’ll get it done as soon as...</div>
                  </div>
                  <div className='ml-[16px]'>
                    <div className='text-md text-[#7171B8]'>05:14 pm</div>
                    <div className='float-right'><img src='/pin.png' alt='pin_img' /></div>
                  </div>
                </div>
                <div className='flex py-[8px] px-[12px]'>
                  <img src='/chat_avatar.png' alt='chat_avatar'/>
                  <div className='ml-[8px]'>
                    <div className='text-xl text-[#4848A4]'> Salespersons SCLA</div>
                    <div className='text-md text-[#7171B8]'> Sure, i’ll get it done as soon as...</div>
                  </div>
                  <div className='ml-[16px]'>
                    <div className='text-md text-[#7171B8]'>05:14 pm</div>
                    <div className='float-right'><img src='/tick.png' alt='pin_img' /></div>
                  </div>
                </div>
                <div className='flex py-[8px] px-[12px]'>
                  <img src='/chat_avatar.png' alt='chat_avatar'/>
                  <div className='ml-[8px]'>
                    <div className='text-xl text-[#4848A4]'> Salespersons SCLA</div>
                    <div className='text-md text-[#7171B8]'> Sure, i’ll get it done as soon as...</div>
                  </div>
                  <div className='ml-[16px]'>
                    <div className='text-md text-[#7171B8]'>05:14 pm</div>
                    <div className='float-right'><img src='/pin.png' alt='pin_img' /></div>
                  </div>
                </div>
                <div className='flex py-[8px] px-[12px]'>
                  <img src='/chat_avatar.png' alt='chat_avatar'/>
                  <div className='ml-[8px]'>
                    <div className='text-xl text-[#4848A4]'> Salespersons SCLA</div>
                    <div className='text-md text-[#7171B8]'> Sure, i’ll get it done as soon as...</div>
                  </div>
                  <div className='ml-[16px]'>
                    <div className='text-md text-[#7171B8]'>05:14 pm</div>
                    <div className='float-right'><img src='/file.png' alt='pin_img' /></div>
                  </div>
                </div>
          
              </div>
              <div className='mt-[25px]' style={{boxShadow:"rgba(51, 51, 153, 0.6) 1px 7px 12px 4px",borderRadius:12}}>
                  <div className='flex py-[8px] px-[12px] items-center'>
                    <img src='/chat_avatar.png' alt='chat_avatar' width={60} style={{height:60}}/>
                    <div className='ml-[20px]'>
                      <div className='text-xl text-[#4848A4]'> See all Attached Reports</div>
                      <div className='text-md text-[#7171B8]'> See all reports that have been attached in conversations</div>
                    </div>
                  </div>
              </div>
              <div className='flex mt-10'>
                  <div className='bg-[#4848A4] rounded-lg px-[30px] py-[16px]'>
                    <img src='/create_group.png'></img>
                    <span className='text-white text-xl'> Create new Group</span>
                  </div>
                  <div className='bg-[#FF85A3] w-[150px] ml-5 rounded-lg px-[30px] py-[16px]'>
                    <img src='/chat_add.png'></img>
                    <span className='text-white text-xl'> New Chat</span>
                  </div>
              </div>
            </div>
            <div className='col-span-3 p-[50px] !pb-0 relative'>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1 ml-[20px]">New Chat With...</h1>
                    </div>
                    <div className="flex items-center p-[15px] cursor-pointer bg-[#FAFBFD]" onClick={handleChange1}>
                        <img src={require('../../../assets/img/Avatar/'+dmv.image+'.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>{dmv.name}</h3>
                        <img className="pe-4" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                        <img className="ps-3" src={require('../../../assets/img/Filter.png')} alt="" />
                    </div>
                    {isOpen1 && (
                        <DmvDropdown handleClose={handleClose}/>
                    )}
                </div>
                <div className='grid grid-cols-4 items-center'>
                  <div className='col-span-2 p-[50px] text-gray-700'>
                      You can either start a conversation with an User that's already on your contacts or send an Invite!
                  </div>
                  <div className="store-card col-span-2 px-8 py-4 h-[238px]">
                      <div className="flex items-end py-3 text-[#FF3366]">
                          <h1 className="text-2xl flex-1 ml-[20px]">Invite a new Associate</h1>
                      </div>
                      <div className='grid grid-cols-5'>
                        <div className='col-span-3'>
                          <InputTextField
                              label='Name and last name'
                              defaultValue=''
                              name="name"
                              placeholder='John Doe'
                              onChange={(e) => console.log(e.target.value)}
                              value={""}
                              variant="filled"
                              style={{ marginTop: 11, width: '100%' }}
                          />
                        </div>
                        <div className='col-span-2 ml-4'>
                          <InputTextField
                              label='Sales Person'
                              defaultValue=''
                              name="sales_person"
                              placeholder='Sales Person'
                              onChange={(e) => console.log(e.target.value)}
                              value={""}
                              variant="filled"
                              style={{ marginTop: 11, width: '100%' }}
                          />
                        </div>
                        <div className='col-span-3'>
                          <InputTextField
                              label='Email'
                              defaultValue=''
                              name="email"
                              placeholder='JohnDoe@gmail.com'
                              onChange={(e) => console.log(e.target.value)}
                              value={""}
                              variant="filled"
                              style={{ marginTop: 11, width: '100%' }}
                          />
                        </div>
                        <div className='col-span-2 ml-4 mt-3'>
                          <div className='bg-[#333399] text-white p-2 rounded-lg flex h-full items-center justify-center'>
                            <span className='text-lg'> Create Link</span>
                            <img src='/link.png' width={17} className='ml-2' style={{height:17}}></img>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className='text-md text-gray-700 mt-10'>
                  Remember, aside from the Salespeople, you may have to wait for the DMV or Lender to accept the request to join this space. 
                </div>
                <div className='bg-[#8F8F8F] flex absolute bottom-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                      <img src='/imoticon.png' width={24} className='h-[24px]' alt='imoticon_img'></img>
                      <img src='/file_chat.png' width={24} className='h-[24px] ml-[20px]' alt='file_attach'></img>
                      <input type='text' style={{flex:1}} className='rounded-3xl ml-[20px] px-10 h-[48px]' placeholder='Say something...'></input>
                      <div className='bg-white rounded-3xl ml-10 h-[48px] w-[48px]'><img src='/paper_plane.png' alt='paper_plane'></img></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
