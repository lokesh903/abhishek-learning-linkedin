import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateuser } from "../feacture/userDetailsSlice";
import { useNavigate } from "react-router-dom";
function Update(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const users = useSelector((state) => state.app.users);
    const singleuser = users.find((user) => user.id === id);

    const [userData, setUserData] = useState({
        name: singleuser.name,
        email: singleuser.email,
        age: singleuser.age,
        gender: singleuser.gender,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        console.log('event==========>',event)
        event.preventDefault();
        dispatch(updateuser({ id, ...userData })).then(res=>{
            navigate('/read');
        })
    };

    return (
        <div className="Create_user">
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Update</h1>
                    <div className="user_input">
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                            type="text"
                            id="username"
                            name="name"
                            value={userData.name}
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="user_input">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="user_input">
                        <label htmlFor="age">Age</label>
                        <br />
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={userData.age}
                            placeholder="Enter your age"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="user_input">
                        <label>Select your gender</label>
                        <div className="radio_option">
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={handleInputChange}
                                checked={userData.gender === 'male'}
                                style={{ marginLeft: '20px' }}
                            />
                        </div>
                        <div className="radio_option">
                            <label htmlFor="female">Female</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={handleInputChange}
                                checked={userData.gender === 'female'}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit">update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;
