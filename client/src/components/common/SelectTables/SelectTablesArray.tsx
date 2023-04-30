import React, { useState } from "react";
import InputTextField from "./InputTextField";
import { useDispatch, useSelector } from "react-redux";

function SelectTablesArray() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Vehicle Number'
                        defaultValue=''
                        name="vehicle_number"
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_NUM', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_num)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Vehicle Type'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_TYPE', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_type)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Body Type Model'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_BODY_TYPE_MODEL', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_body_type_model)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Your Model'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_YEAR_MODEL', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_year_model)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Make'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_MAKE', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_make)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Model'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_MODEL', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_model)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Plate Number'
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_PLATE_NUMBER', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_plate_number)}
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Model'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_PLATE_MODEL', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_plate_model)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
                <div className="">
                    <InputTextField
                        label='Class'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_CLASS', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_class)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Trust Number'
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_TRUST_NUMBER', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_trust_number)}
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='Fees Paid'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_FEES_PAID', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_fees_paid)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Issue Date'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_ISSUE_DATE', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_issue_date)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Expiration Date'
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_EXPIRATION_DATE', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_expiration_date)}
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2">
                    <InputTextField
                        label='Registered Owners'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_REGISTERED_OWNERS', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_registered_owners)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="col-span-2">
                    <InputTextField
                        label='Address'
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_ADDRESS', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_address)}
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='City'
                        defaultValue=''
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_CITY', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_city)}
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
                <div className="">
                    <InputTextField
                        label='State'
                        onChange={(e) => dispatch({ type: 'SET_VEHICLE_STATE', payload:e.target.value })}
                        value={useSelector((state:any) => state.carData.vehicle_state)}
                        defaultValue=''
                        // id="reddit-input"
                        variant="filled"
                        style={{ marginTop: 11, width: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectTablesArray;