import React, { useEffect, useState } from 'react';
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { loadTitles } from 'store/actions/title';

import SideBar from 'components/common/SideBar';
import HeaderBar from 'components/common/HeaderBar';
import TitleList from 'components/common/TitleList';
import TitleTables from 'components/common/TitleTables';
import FilterCards from 'components/common/FilterCards';
import Footer from 'components/common/Footer';
import { useSelector } from 'react-redux';

function Home() {
  const [titleData, setTitleData] = React.useState([]);
  const [isDetail, setIsDetail] = React.useState(false);
  useEffect(() => {
    const fetchTitles = async () => {
      const data = await loadTitles();
      setTitleData(data);
    };
    fetchTitles();
  },[]);
  


  const [isCard,setViewMode] = useState('card');
  const changeViewMode = () => {
    if(isCard ==='card'){
      setViewMode('table');
    }
    else {
      setViewMode('card');
    }
  }
  return (
    <>
      <div className="px-[24px]">
        <div className='flex'>
          <SideBar/>
          <div className='w-full py-5'>
            <HeaderBar/>
            <div className='flex w-full'>
              {
                isCard === 'card' ? (
                  <>
                    <TitleList data={titleData} viewMode={isCard} changeView={changeViewMode} setDetail={setIsDetail}/>
                    <FilterCards />
                  </>
                ) : 
                (
                  <TitleTables data={titleData} viewMode={isCard} changeView={changeViewMode} setDetail={setIsDetail}/>
                )
              }
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Home;
