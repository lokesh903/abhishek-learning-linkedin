import React, { useState } from "react";
import './create.css';
import { useDispatch } from "react-redux";
import { createUser } from "../feacture/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const naviget=useNavigate();
    
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('userrrrrrrrrrrrrrrrrr===>',users)
        dispatch(createUser(users));
        naviget('/read')

    };

    return (
        <div className="Create_user">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="user_input">
                        <label htmlFor="username">Username</label>
                        <br />
                        <input type="text" id="username"  name='name'  placeholder="Enter your name" onChange={getUserData} />
                    </div>
                    <div className="user_input">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" name='email' placeholder="Enter your email" onChange={getUserData} />
                    </div>
                    <div className="user_input">
                        <label htmlFor="age">Age</label>
                        <br />
                        <input type="number" id="age" name='age' placeholder="Enter your age" onChange={getUserData} />
                    </div>
                    <div className="user_input">
                        <label>Select your gender</label>
                        <div className="radio_option">
                            <label htmlFor="male" >Male</label>
                            <input type="radio" id="male"  name='gender' value='male'  onChange={getUserData}   style={{ marginLeft: '20px' }} />
                        </div>
                        <div className="radio_option">
                            <label htmlFor="female">Female</label>
                            <input type="radio" name='gender' id="female"   onChange={getUserData}  value="female" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
