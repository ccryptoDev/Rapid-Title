import React, { useEffect, useState, useRef } from 'react';
import './index.view.css';
import SideBar from '../SideBar';
import HeaderBar from '../HeaderBar';
import Switcher from '../Switcher';
import DmvDropdown from '../DmvDropdown';
import InputTextField from '../SelectTables/InputTextField';
import { loadTitles } from 'store/actions/title';
import { loadMessages } from 'store/actions/message';
import ChatTitleList from '../ChatTitleList';
import {io, Socket} from 'socket.io-client';
import { useSelector } from 'react-redux';
import api from 'utils/api';

export const socket = io('http://localhost:5000');

interface IMessage {
  message: string;
  username: string;
  __createdtime__: number;
}
function formatDateFromTimestamp(timestamp: number) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return (
    <div>
      <p>{formattedHours}:{minutes} {ampm}</p>
    </div>
  );
}

export default function Community() {
  const [messagesReceived, setMessagesReceived] = useState<IMessage[]>([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    //@ts-ignore
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    messagesEndRef.current?.scrollIntoView()
  }

  useEffect(() => {
    const fetchTitles = async () => {
      const data = await loadTitles();
      setTitleData(data);
    };
    fetchTitles();

    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
          ...state, 
          {
            message: data.chat,
            username: data.user_name,
            __createdtime__: data.__createdtime__,
          }
        ])
      });
      setTimeout(() => {
        scrollToBottom();
      },1000)

      return () => {socket.off('receive_message')};
  }, [socket]);

  const [titleData, setTitleData] = React.useState([]);
  const user = useSelector((state: any) => state.auth.user);
  const [chat_tab, setChatTab] = useState('titles');
  const [chat_room_id, setChatRoomID] = useState('');
  const [chat_room_img, setChatRoomImg] = useState('');
  const [chat_room_name, setChatRoomName] = useState('');

  const fetchMessages = async (room_id :any) => {
    console.log('room_id: ' + room_id);
    const data = await loadMessages(room_id);
    console.log(data);
    setMessagesReceived(data);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };
  
  const changeRoom = async (room_id: any, room_img: any, room_name: any) => {
    console.log(room_id);
    console.log(room_name);
    if(chat_room_name !== ''){
      const __createdtime__ = Date.now();
      socket.emit('leave_room', { user, chat_room_name });  
    }
    fetchMessages(room_id);

    setChatRoomID(room_id);
    setChatRoomImg(room_img);
    setChatRoomName(room_name);
    console.log(room_name);
    socket.emit('join_room', {user, room_name});
  }
  const [isOpen1, setIsOpen1] = useState(false);
  const [dmv, setDMV] = useState({name:'Los Angeles DMV',image:'Avatar2'});
  const [isSelected, setSelected] = useState(false);
  const [chat, setChat] = useState('');
  const [chatContent, setChatContent] = useState([]);
  const sendMessage =() => {
    if(chat !== ''){
      const __createdtime__ = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      const user_id = user._id;
      const user_name = user.username;
      socket.emit('send_message', { chat_room_id, chat_room_name, user_name, user_id, chat, __createdtime__ });
      setChat('');
      setTimeout(() => {
        scrollToBottom();
      },100)
    }
  }
  
  const handleChange1 = () => {
      setIsOpen1(current => !current)
  }
  const handleClose = (index : number, param: any) => {
    setDMV(param);
    setIsOpen1(false);
    setSelected(true);
  }

  const _onKeypress = (e: any) => {
    console.log('enter', 'safsd');
    if(e.key === 'Enter'){
      // if(!isSelected){
      //   setChat('');
      //   return;
      // }
      // let temp = chatContent;
      //@ts-ignore
      sendMessage();
      // setChat('');
    }
  }

  return (
    <div className="px-[24px]">
      <div className="flex">
        <SideBar />
        <div className="w-full p-5">
          <HeaderBar />
          <div className='grid grid-cols-4 gap-1 p-[20px] overflow-x-auto overflow-y-hidden rounded-lg h-[760px] !mb-0 !py-0 m-[40px]' style={{maxWidth: 'calc(100vw - 133px)',boxShadow:"rgba(0, 0, 0, 0.25) 1px 7px 8px 12px"}}>
            <div className='col-span-1 flex flex-col justify-center'>
              <div className='flex'>
                <div className='flex rounded-2xl w-[120px] p-[10px] text-white bg-[#5C5CAD] justify-center' style={{fontSize:16,fontWeight:700}}>
                  <Switcher />
                  <span>Chat</span>
                </div>
                <div className={`${chat_tab === 'titles' ? 'bg-[#FF4876]' : 'bg-[#5A6A9D]'} flex p-[10px] rounded-l-2xl ml-[5px] w-[99px] text-white  justify-center cursor-pointer`} style={{fontSize:16,fontWeight:700}} onClick={()=>{setChatTab('titles')}}>
                  <span>Titles</span>
                </div>
                <div className={`${chat_tab === 'groups' ? 'bg-[#FF4876]' : 'bg-[#5A6A9D]'} flex p-[10px] w-[99px] text-white  justify-center cursor-pointer`} style={{fontSize:16,fontWeight:700}} onClick={()=>{setChatTab('groups')}}>
                  <span>Groups</span>
                </div>
                <div className={`${chat_tab === 'people' ? 'bg-[#FF4876]' : 'bg-[#5A6A9D]'} flex rounded-r-2xl w-[99px] p-[10px] text-white  justify-center cursor-pointer`} style={{fontSize:16,fontWeight:700}} onClick={()=>{setChatTab('people')}}>
                  <span>People</span>
                </div>
              </div>
              <div className='mt-[30px] h-[350px] overflow-y-auto'>
                { chat_tab==='titles' && (<ChatTitleList data={titleData} changeRoom={changeRoom} socket={socket} />)}
                   
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
            <div className='col-span-3 p-[50px] !py-0 relative'>
              {/* {
                !isSelected ? <>
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
                  </>
                  : <>
                    <div className='bg-[#D6D6EB] flex absolute top-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                      <img src='/avatar10.png' width={48} className='h-[48px]' alt='imoticon_img'></img>
                      <div className='flex flex-col justify-center ml-3'>
                        <span className='text-xl'> Melina Baht</span>
                        <span className='flex items-center'> <img src='/badge_green.svg'></img> <span className='text-gray-600 ml-1'>online</span></span>
                      </div>
                    </div>
                    <div className='grid flex-col absolute bottom-[85px] py-[16px] px-[40px] max-h-[598px] overflow-y-auto' style={{width: 'calc(100% - 30px)'}}>
                      {chatContent}
                    </div>
                  </>
              } */}
                {
                  chat_room_id !== '' ? <>
                    <div className='bg-[#D6D6EB] flex absolute top-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                      <img src={chat_room_img} className='h-[48px] rounded-lg' alt='imoticon_img'></img>
                      <div className='flex flex-col justify-center ml-3'>
                        <span className='text-xl'> {chat_room_name}</span>
                        <span className='flex items-center'> <img src='/badge_green.svg'></img> <span className='text-gray-600 ml-1'>online</span></span>
                      </div>
                    </div>
                    <div className='grid flex-col absolute bottom-[85px] py-[16px] px-[40px] max-h-[583px] overflow-y-auto' style={{width: 'calc(100% - 30px)'}}>
                      {messagesReceived.map((msg, i) => (
                        <>
                          {user.username === msg.username ? (
                          <>
                            <span className='text-[12px] text-right'>
                              {
                                formatDateFromTimestamp(msg.__createdtime__)
                              }
                            </span>
                            <div className='grid relative' key={i}>
                              <div className='bg-[#FF7095] justify-self-end text-[#010101] w-fit p-[15px] float-right' style={{borderRadius:'20px 20px 0px'}}>{msg.message}</div>
                            </div>
                          </>) : (
                            <>
                              <span className='text-[12px] text-left'>
                                {
                                  formatDateFromTimestamp(msg.__createdtime__)
                                }
                              </span>
                              <div className='grid relative' key={i}>
                                <div className='bg-[#EBEBF5] text-[#010101] w-fit p-[15px] float-left' style={{borderRadius:'0px 20px 20px'}}>{msg.message}</div>
                              </div>
                              <span className='text-[12px] mt-[0px] right-[20px] mb-[5px] text-left'>{msg.username}</span>
                            </>
                          )}
                        </>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                    <div className='bg-[#8F8F8F] flex absolute bottom-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                          <img src='/imoticon.png' width={24} className='h-[24px]' alt='imoticon_img'></img>
                          <img src='/file_chat.png' width={24} className='h-[24px] ml-[20px]' alt='file_attach'></img>
                          <input type='text' style={{flex:1}} className='rounded-3xl ml-[20px] px-10 h-[48px]' placeholder='Say something...' value={chat} onChange={e=> setChat(e.target.value)} onKeyDown={_onKeypress}></input>
                          <div className='bg-white rounded-3xl ml-10 h-[48px] w-[48px]'><img src='/paper_plane.png' alt='paper_plane'></img></div>
                    </div>
                  </> : <>
                    <div className='bg-[#D6D6EB] flex absolute top-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                        
                    </div>
                    <div className='bg-[#8F8F8F] flex absolute bottom-0 py-[16px] items-center px-[40px] h-[85px]' style={{width: 'calc(100% - 30px)'}}>
                          <img src='/imoticon.png' width={24} className='h-[24px]' alt='imoticon_img'></img>
                          <img src='/file_chat.png' width={24} className='h-[24px] ml-[20px]' alt='file_attach'></img>
                          <input type='text' style={{flex:1}} className='rounded-3xl ml-[20px] px-10 h-[48px]' placeholder='Say something...' value={chat} onChange={e=> setChat(e.target.value)} onKeyDown={_onKeypress}></input>
                          <div className='bg-white rounded-3xl ml-10 h-[48px] w-[48px]'><img src='/paper_plane.png' alt='paper_plane'></img></div>
                    </div>
                  </>
                }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
