import React from 'react';
// import component 👇
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import walletLogo from 'assets/img/wallet_logo.png'
import metamaskLogo from 'assets/img/metamask.png'
import skeleton from 'assets/img/skeleton.png'
import { logout, setWallet } from 'store/actions/auth';
import wallet from '../../utils/wallet'
import {
  getUserAddress
} from '../../utils/useWeb3';
import logo from 'assets/img/logo_large.png';
import { walletList } from 'utils/constants';

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ collapsed,setCollapsed ] = React.useState(false);
  const [walletType, setWalletType ] = React.useState('');
  const [tempWalletType, setTempWalletType ] = React.useState('');

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  const connectWallet = async(param :string) => {
    await wallet.setProvider(param);
    await wallet.login(param);
    const walletAddress = await getUserAddress();
    if(walletAddress){
      const result = await setWallet({wallet: walletAddress});
      console.log(result);
      setCollapsed(true)
      toggleDrawer();
    }
  }
  
  const selectWallet = (param: string,e: any) => {
    setTempWalletType(param);
    const allWithClass = Array.from(
      document.getElementsByClassName('active')
    );
    //toggle wallet logo
    allWithClass.map(elem => {
      elem.classList.toggle('active');
      elem.children[0].classList.toggle('hidden');
      elem.children[1].classList.toggle('hidden');
      return null;
    });

    e.currentTarget.classList.toggle('active');
    e.currentTarget.children[0].classList.toggle('hidden');
    e.currentTarget.children[1].classList.toggle('hidden');
  }

  const capitalizeFirstLetter = (param: string) => {
    // get the first character of the string
    let firstCharacter = param.charAt(0);

    // convert the first character to uppercase
    firstCharacter = firstCharacter.toUpperCase();

    // combine the first character with the rest of the string
    let capitalizedString = firstCharacter + param.slice(1);

    // log the capitalized string to the console
    return capitalizedString;
  }

  return (
    <>
      <button className='absolute top-2 left-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={toggleDrawer}>Connect Wallet</button>
      <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          size={423}
      >
        <div className='p-[55px] overflow-y-scroll max-h-full'>
          <div className=' flex justify-center'>
            <img src={walletLogo}  alt="" />
          </div>
          <p className='mt-10'>What is a <span className='text-red-500'>wallet</span>?</p>
          <button className='wallet-btn mt-[36px] w-full flex justify-center items-center py-2 px-2 rounded-full'>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M12.8648 1.5H15.4043C16.456 1.5 17.3082 2.35939 17.3082 3.41997V5.98089C17.3082 7.04148 16.456 7.90087 15.4043 7.90087H12.8648C11.8131 7.90087 10.9609 7.04148 10.9609 5.98089V3.41997C10.9609 2.35939 11.8131 1.5 12.8648 1.5Z" fill="#5C5CAD"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M4.21249 1.5H6.75196C7.80366 1.5 8.65585 2.35939 8.65585 3.41997V5.98089C8.65585 7.04148 7.80366 7.90087 6.75196 7.90087H4.21249C3.16079 7.90087 2.30859 7.04148 2.30859 5.98089V3.41997C2.30859 2.35939 3.16079 1.5 4.21249 1.5ZM4.21249 10.0991H6.75196C7.80366 10.0991 8.65585 10.9585 8.65585 12.0191V14.58C8.65585 15.6399 7.80366 16.5 6.75196 16.5H4.21249C3.16079 16.5 2.30859 15.6399 2.30859 14.58V12.0191C2.30859 10.9585 3.16079 10.0991 4.21249 10.0991ZM15.4047 10.0991H12.8652C11.8135 10.0991 10.9613 10.9585 10.9613 12.0191V14.58C10.9613 15.6399 11.8135 16.5 12.8652 16.5H15.4047C16.4564 16.5 17.3086 15.6399 17.3086 14.58V12.0191C17.3086 10.9585 16.4564 10.0991 15.4047 10.0991Z" fill="#5C5CAD"/>
            </svg>
            <span className='ml-3 text-[#5C5CAD]'>Select your wallet</span>
          </button>
          <div className={walletType ? `mt-[48px]` : 'hidden'}>
            <span>Choosen Wallet</span>
            <div className=' flex items-center justify-center mt-2'>
              <img src={metamaskLogo} alt="" width={24} height={24}/>
              <span className='flex-1 ml-2 overflow-hidden'>{capitalizeFirstLetter(walletType)}</span>
              <span className='cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={collapsed ? `hidden`:''}>
                    <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(180deg)'}}  className={collapsed ? '':'hidden'}>
                    <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </span>
            </div>
          </div>
          <div className={walletType ? 'hidden' : ''}>
              <div className={`flex items-center justify-center mt-[48px]`}>
                <span className='flex-1'>Wallets</span>
                <span className='cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={collapsed ? `hidden`:''}>
                    <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(180deg)'}}  className={collapsed ? '':'hidden'}>
                    <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
          </div>
          <div className={collapsed ? `hidden` : ''}>
                <div className=' flex items-center justify-center mt-[29px]'>
                  <span className='flex-1 text-gray-600'>MOST POPULAR WALLETS</span>
                </div>
                {
                  walletList.map(w => {
                    return (
                              <div className=' flex items-center p-[10px] cursor-pointer' onClick={(e) => selectWallet(w.id,e)}>
                                <img src={skeleton} alt="" width={24} height={24} />
                                <img src={metamaskLogo} alt="" width={24} height={24} className='hidden'/>
                                <span className='ml-2 text-xl'>{w.name}</span>
                              </div>
                            )
                  })
                }
                <button className='bg-[#333399] mt-[36px] w-full flex justify-center items-center py-2 px-2 rounded-full'>
                  <span className='ml-3 text-white'>Load More</span>
                </button>
                <button className='bg-[#FF3366] mt-[36px] w-full flex justify-center items-center py-2 px-2 rounded-full mb-[39px]' onClick={() => {setWalletType(tempWalletType); setCollapsed(true)}}>
                    <span className='ml-3 text-white'>Select Wallet</span>
                </button>
          </div>
          {walletType && collapsed ? (
            <div>
              <button className='bg-[#FF3366] mt-[36px] w-full flex justify-center items-center py-2 px-2 rounded-full mb-[39px]' onClick={()=>connectWallet(walletType)}>
                  <span className='ml-3 text-white'>Continue to RapidTitle</span>
              </button>
            
              <span className='text-grey '>
                Remember, once you have selected a wallet, all Titles will be attached to that account until you move them.
              </span>
            </div>
          ): (
            <div>
             
            </div>
          )}
          
          <button className='mt-[36px] flex justify-end w-full items-center py-2 px-2' onClick={logout}>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2.40625 4.83525C2.40625 2.997 3.92893 1.5 5.79965 1.5H9.52048C11.3874 1.5 12.9062 2.9925 12.9062 4.82775V13.1648C12.9062 15.0037 11.3836 16.5 9.51209 16.5H5.79278C3.92511 16.5 2.40625 15.0075 2.40625 13.1722V12.4672V4.83525Z" fill="#A8A8A8"/>
              <path d="M17.2411 8.5911L15.1068 6.40935C14.8862 6.18435 14.5312 6.18435 14.3114 6.41085C14.0922 6.63735 14.093 7.0026 14.3128 7.2276L15.4823 8.42235H14.361H8.0683C7.75786 8.42235 7.50586 8.6811 7.50586 8.99985C7.50586 9.31935 7.75786 9.57735 8.0683 9.57735H15.4823L14.3128 10.7721C14.093 10.9971 14.0922 11.3623 14.3114 11.5888C14.4217 11.7021 14.5656 11.7591 14.7102 11.7591C14.8533 11.7591 14.9972 11.7021 15.1068 11.5903L17.2411 9.40935C17.3471 9.3006 17.407 9.1536 17.407 8.99985C17.407 8.84685 17.3471 8.69985 17.2411 8.5911Z" fill="#A8A8A8"/>
            </svg>
            <span className='ml-3 text-gray'>Logout</span>
          </button>
        </div>
      </Drawer>
      <div className='items-center justify-center flex h-screen'>
        <img src={logo} alt="logo"/>
      </div>
    </>
  );
}

export default Home;
