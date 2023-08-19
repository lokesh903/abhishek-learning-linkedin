import React from "react";
import './customModel.css';
import { useSelector } from "react-redux";

const CustomModel = ({ id, showpopup, setShowpopup }) => {
    const alluser = useSelector((state) => state.app.users);
    const singleuser = alluser.filter((user) => user.id === id);
    
    const handleCloseModel = () => {
        setShowpopup(false);
    }
    return (
        <div className={showpopup ? 'modalBackGround active' : 'modalBackGround'}>
            <div className="modalContainer">
                <button className="closeButton" onClick={handleCloseModel}>Close</button>
                <h2>{singleuser[0].name}</h2>
                <h3>{singleuser[0].email}</h3>
                <h3>Age: {singleuser[0].age}</h3>
                <h5>Gender: {singleuser[0].gender}</h5>
            </div>
        </div>
    );
}

export default CustomModel;
