import React from "react";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SelectListArray from "./SelectListArray";
import SelectTablesArray from "./SelectTablesArray";
import { useNavigate, useLocation } from "react-router-dom";

function SelectTables() {
    const navigate = useNavigate();
    const location = useLocation();
    const continueHandler = () => {
        if(location.pathname === '/createtitle'){
            navigate('/createtitle/otherinfo')
        }
        else {
            alert('success!');
        }
    }
    return (
        <div className="col-span-3 p-2 w-full">
            <div className="store-card px-8 py-4">
                <div className="flex items-center py-5 text-[#4848A4]">
                    <p className={ location.pathname === '/createtitle' ? `text-3xl px-3` : `text-3xl px-3 text-[#FF3366]`} style={{ fontWeight: 600, fontSize: '36px' }}>Certificate of a Title</p>
                    <img src={require('../../../assets/img/File/Vector.png')} alt="" />
                </div>
                <div className="">
                    <form>
                        <SelectTablesArray />
                    </form>
                </div>
                <hr className="mt-5" />
                <div className="flex">
                    {
                        SelectListArray.map((item, index) => (
                            <div key={index} className="bg-white mt-5 mx-3 hover:bg-grey text-grey-darkest py-3 px-4 rounded inline-flex items-center text-[#4848A4]" style={{ borderRadius: 12, border: '1px solid grey' }}>
                                <img src={require('../../../assets/img/Avatar/' + item.image + '.png')} alt={item.title} />
                                <div className="px-3">
                                    <p className="font-bold">{item.title}</p>
                                    <p className="text-[#9B96B6]">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex mt-24 mb-3 items-center">
                    <p style={{ fontSize: '14px' }}>
                        Remember, once you have selected a Seller, Lender and DMV,
                        an invitation will be sent to the aforementioned, where they can accept,
                        decline or suggest a change of title.
                    </p>
                    
                        {
                            location.pathname === '/createtitle' ? 
                            (
                                <div className="flex items-center flex-col">
                                    <button className="bg-[#FF3366] text-white px-4 py-2 w-[148px] mt-1 font-bold rounded  items-center" style={{ borderRadius: 4 }} onClick={continueHandler}>
                                        Continue
                                    </button>
                                </div>
                            )
                            : (
                                <div className="flex items-center flex-col">
                                    <button className="bg-[#333399] flex text-white px-4 py-2 w-[148px] font-bold rounded  items-center" style={{ borderRadius: 4 }} onClick={continueHandler}>
                                        <span className="mr-2"> Paper Title</span>
                                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.1582 9.4869L7.47797 2.87987C9.35737 0.915044 12.4045 0.915044 14.2839 2.87987C16.1633 4.84469 16.1631 8.03048 14.2837 9.99531L6.99166 17.6188C5.73873 18.9287 3.70767 18.9285 2.45473 17.6186C1.2018 16.3087 1.20149 14.1852 2.45443 12.8753L9.74646 5.25184C10.3729 4.5969 11.3892 4.5969 12.0156 5.25184C12.6421 5.90678 12.6417 6.9684 12.0152 7.62334L5.69543 14.2304" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button className="bg-[#FF3366] text-white px-4 py-2 w-[148px] mt-1 font-bold rounded  items-center" style={{ borderRadius: 4 }} onClick={() => navigate('/createtitle')}>
                                        Edit
                                    </button>
                                </div>
                            )
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default SelectTables;