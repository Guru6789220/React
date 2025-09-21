import React,{useReducer} from 'react';
import { UseAuth } from '../Context/AuthContext';

const Register=()=>{
    const initialState={
        Name:"",
        Email:"",
        MobileNo:"",
        Address:"",
        UserName:"",
        Password:""
    };

    const FormRender=(state,action)=>
    {
        debugger
        switch(action.type)
        {
            case "update_Data":
                {
                    return{
                        ...state,
                        [action.field]:[action.value]
                    }

                }
                case "REST":
                    {
                        return initialState;
                    }
            default:return state;
        }
    }

    const[state,dispatch]=useReducer(FormRender,initialState);

    const handlechange=(e)=>{
        debugger
        dispatch({
            type:"update_Data",
            value:e.target.value,
            field:e.target.name
        });
    }

        const {Token,setToken}=UseAuth();
        console.log(Token);
    return(<>
        <div className='card'>
            <div className="card-header">
                <div className='row'>
                    <div className="col-lg-12">
                        <h4>Registration</h4>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row mt-1 mb-1">
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-form-label">Full Name : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="text" className="form-control" value={state.Name} placeholder="Enter Full Name" name="Name" onChange={handlechange} autoComplete='off' required />
                    </div>
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-label">Email : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="email" className="form-control" placeholder='Enter Email' value={state.Email} name="Email" onChange={handlechange} autoComplete="off" required />
                    </div>
                </div>
                <div className="row mt-1 mb-1">
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-form-label">Mobile No : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="text" className="form-control" value={state.MobileNo} placeholder="+91-0123456789" maxLength="10" name="MobileNo" onChange={handlechange} autoComplete='off' required />
                    </div>
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-label">Address : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <textarea type="email" className="form-control" placeholder='Enter Address' value={state.Address} name="Address" onChange={handlechange} autoComplete="off" required />
                    </div>
                </div>
                <div className="row mt-1 mb-1">
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-form-label">User Name : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="text" className="form-control" value={state.UserName} placeholder="Enter UserName"  name="UserName" onChange={handlechange} autoComplete='off' required />
                    </div>
                    <div className="col-lg-2 col-12 d-flex justify-content-lg-end justify-content-start">
                        <label className="form-label">Password : <em className="text-danger"> * </em></label>
                    </div>
                    <div className="col-lg-3">
                        <input type="Password" className="form-control" placeholder="" value={state.Password} name="Password" onChange={handlechange} autoComplete="off" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <button className="btn btn-primary col-lg-1 col-4 mx-1 my-1">Save</button>
                        <button className="btn btn-primary col-lg-1 col-4 mx-1 my-1" onClick={()=>dispatch({type:"REST"})}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Register;

