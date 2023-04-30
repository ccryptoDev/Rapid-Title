import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import InputTextField from "./InputTextField";
import TitleTypeDropdown from "../TitleTypeDropdown";
import TitleStatusDropdown from "../TitleStatusDropdown";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PINATA_JWT } from "utils/constants";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function AdditionalInfo() {
    const [isOpen1,setIsOpen1] = React.useState(false);
    const [isOpen2,setIsOpen2] = React.useState(false);
    const [modalOpend,setModalOpened] = React.useState(false);
    const [vehicle1_url,setVehicle1URL] = React.useState(false);
    const [vehicle2_url,setVehicle2URL] = React.useState(false);
    const [vehicle3_url,setVehicle3URL] = React.useState(false);
    const carData = useSelector( (state: any) => state.carData);

    const JWT = `Bearer ${PINATA_JWT}`;
    const handleOpen = () => setModalOpened(true);
    const handleClose = (e: object, reason: string) => {
        if(reason === 'backdropClick'){
            return;
        }
        setModalOpened(false);
    }
    
    const navigate = useNavigate();
    const location = useLocation();
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 490,
        height: 613,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius:20,
        display:'flex',
        flexDirection: 'column',
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
      };
    const detailHandler = () => {
        navigate('/home');
    }
    const completeHandler = async () => {
            var data = JSON.stringify({
            "pinataOptions": {
                "cidVersion": 1
            },
            "pinataMetadata": {
                "name": "carData",
                "keyvalues": {
                    
                }
            },
            "pinataContent": {
                carData,
                vehicle1_url: `https://gateway.pinata.cloud/ipfs/${vehicle1_url}`,
                vehicle2_url: `https://gateway.pinata.cloud/ipfs/${vehicle2_url}`,
                vehicle3_url: `https://gateway.pinata.cloud/ipfs/${vehicle3_url}`,
            }
        });
        
        var config = {
            method: 'POST',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${PINATA_JWT}`
            },
            data
        };
        //@ts-ignore
        const res = await axios(config);
        
        console.log(res.data.IpfsHash);
        handleOpen();
    }

    const handleSubmission = async (imageFile : any, index: number) => {

        const formData = new FormData();
        //@ts-ignore
        formData.append('file', imageFile.file)
    
        const metadata = JSON.stringify({
          name: imageFile.file.name,
        });
        formData.append('pinataMetadata', metadata);
        
        const options = JSON.stringify({
          cidVersion: 0,
        })
        formData.append('pinataOptions', options);
    
        try{
          const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            //@ts-ignore
            maxBodyLength: "Infinity",
            headers: {
                //@ts-ignore
              'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: JWT
            }
          });
          
          console.log(res.data.IpfsHash);
          if(index === 1){
            setVehicle1URL(res.data.IpfsHash);
          }
          if(index === 2){
            setVehicle2URL(res.data.IpfsHash);
          }
          if(index === 3){
            setVehicle3URL(res.data.IpfsHash);
          }
        } catch (error) {
          console.log(error);
        }
      };

    const runAfterImageDelete = (file : any) => {
        console.log({ file })
    }
    const handleChange1 = () => {
        setIsOpen1(current => !current)
    }
    const handleChange2 = () => {
        setIsOpen2(current => !current)
    }
    return (
        <div className=" store-card col-span-2 p-2 w-full">
            <Modal
                open={modalOpend}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableEnforceFocus={false}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" color={"#4848A4"}>
                        The Title has been Successfully created
                    </Typography>
                    <img src={require('assets/img/thumb.png')} className="mt-[39px]"></img>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} color={"#4848A4"} className="!mt-[50px]">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <div className="flex items-end flex-col mt-[50px]">
                        <button className="bg-[#FF3366] text-white px-4 py-3 mt-1 font-bold  items-center" style={{ borderRadius: 30 }} onClick={detailHandler}>
                            See the Title Details
                        </button>
                    </div>
                </Box>
            </Modal>
            <div className=" px-8 py-4">
                <div className="flex items-center py-5 text-[#4848A4]">
                    <p className={ `text-3xl px-3`} style={{ fontWeight: 600, fontSize: '36px' }}> Other Information</p>
                    <img src={require('../../../assets/img/File/Vector.png')} alt="" />
                </div>
                <div className="flex">
                    <ImageUploader
                        style={{ height: 180, width: 180, background: '#4848A4', borderRadius:5, marginLeft: 20, color:"white" }}
                        onFileAdded={(img) => handleSubmission(img,1)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    <ImageUploader
                        style={{ height: 180, width: 180, background: '#4848A4', borderRadius:5, marginLeft: 20 }}
                        onFileAdded={(img) => handleSubmission(img,2)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    <ImageUploader
                        style={{ height: 180, width: 180, background: '#4848A4', borderRadius:5, marginLeft: 20 }}
                        onFileAdded={(img) => handleSubmission(img,3)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3">
                            <InputTextField
                                label='Estimated Vehicle Worth'
                                defaultValue=''
                                // id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11, width: '100%' }}
                            />
                        </div>
                        <div className="">
                            <InputTextField
                                label='Floor Plan'
                                defaultValue=''
                                // id="reddit-input"
                                variant="filled"
                                style={{ marginTop: 11, width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-3">
                            <div className="px-4 py-4">
                                <div className="flex items-end py-3 text-[#FF3366]">
                                    <h1 className="text-2xl flex-1"> Type Of Title</h1>
                                </div>
                                <div className="flex items-center p-[7px] cursor-pointer bg-[#FAFBFD]" onClick={handleChange1}>
                                    <img src={require('../../../assets/img/Avatar/car_ins.png')} alt="" />
                                    <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Clear</h3>
                                    <img className="ps-3 pr-2" src={require('../../../assets/img/Filter.png')} alt="" />
                                    <img className="pe-4" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                                </div>
                                {isOpen1 && (
                                    <TitleTypeDropdown />
                                )}
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="px-4 py-4">
                                <div className="flex items-end py-3 text-[#FF3366]">
                                    <h1 className="text-2xl flex-1"> Status</h1>
                                </div>
                                <div className="flex items-center p-[15px] cursor-pointer bg-[#FAFBFD]" onClick={handleChange2}>
                                    <img src={require('../../../assets/img/Avatar/status.png')} alt="" />
                                    <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Completed</h3>
                                    <img className="pe-4" src={require('../../../assets/img/Product/Arrow/Vector.png')} alt="" />
                                </div>
                                {isOpen2 && (
                                    <TitleStatusDropdown />
                                )}
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="my-3 items-center">
                        <div className="flex items-end flex-col">
                            <button className="bg-[#FF3366] text-white px-4 py-2 w-[148px] mt-1 font-bold rounded  items-center" style={{ borderRadius: 4 }} onClick={completeHandler}>
                                Create Title
                            </button>
                        </div>
                        <p className="text-[#6B6B77] mt-[16px]" style={{ fontSize: '14px' }}>
                            The titles type may change unexpectedly depending on the DMVs needs on the specific title, see the titles comments on each title and reports for more information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo;