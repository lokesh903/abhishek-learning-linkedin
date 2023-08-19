// import React, { useEffect, useState } from "react";
// import './read.css';
// import { useDispatch, useSelector } from "react-redux";
// import { showUser, deleteuser } from "../feacture/userDetailsSlice";
// import CustomModel from './CustomModel';
// import { Link, useNavigate } from "react-router-dom";
// import Update from './Update';
// const Read = () => {
//     const dispatch = useDispatch();
//     const alluser = useSelector((state) => state.app.users);
//     // const loading = useSelector((state) => state.app.users);
//     const {loading,searchData}=useSelector((state)=>state.app);
//     console.log('searchData================>',searchData)
    
   
//     const [id, setId] = useState();
//     const [showpopup, setShowpopup] = useState(false);
//     const navigate = useNavigate();
//     useEffect(() => {
//         dispatch(showUser());
//     }, [dispatch]);
//     if (loading) {
//         return <h2>Data Loading........</h2>;
//     }
//     const handleDeleteUser = (userId) => {
//         dispatch(deleteuser(userId));
//     };
//     return (
//         <div className="ReadContainer">
//             {showpopup && <CustomModel id={id} showpopup={showpopup} setShowpopup={setShowpopup} />}
//             <h2>All Data</h2>
//             <div className="Card">
//                  {alluser && alluser.filter(res=>{
//                     if(searchData===''){
//                         return res;
//                     }
//                     else{
//                         // return res.name.toLowerCase().includes(searchData.toLowerCase());
//                      }
//                  }).map((user) => (
//                     <div className="CardContent" key={user.id}>
//                         <h3>{user.name}</h3>
//                         <h4>{user.email}</h4>
//                         <p>Age: {user.age}</p>
//                         <p>Gender: {user.gender}</p>
//                         <button style={{ marginLeft: '5px' }} onClick={() => [setId(user.id), setShowpopup(true)]}>View</button>
//                         <Link to={`/Update/${user.id}`} style={{ marginLeft: '20px' }}>Edit</Link>
//                         <button style={{ marginLeft: '20px' }} onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default Read;

import React, { useEffect, useState } from "react";
import './read.css';
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteuser } from "../feacture/userDetailsSlice";
import CustomModel from './CustomModel';
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();
    const alluser = useSelector((state) => state.app.users);
    const { loading, searchData } = useSelector((state) => state.app);

    const [id, setId] = useState();
    const [showpopup, setShowpopup] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    if (loading) {
        return <h2>Data Loading........</h2>;
    }

    const handleDeleteUser = (userId) => {
        dispatch(deleteuser(userId));
    };

    return (
        <div className="ReadContainer">
            {showpopup && <CustomModel id={id} showpopup={showpopup} setShowpopup={setShowpopup} />}
            <h2>All Data</h2>
            <div className="Card">
                {alluser && alluser.filter(res => {
                    if (searchData === '') {
                        return res;
                    } else {
                        return res.name.toLowerCase().includes(searchData);
                    }
                   }).map((user) => (
                    <div className="CardContent" key={user.id}>
                        <h3>{user.name}</h3>
                        <h4>{user.email}</h4>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                        <button style={{ marginLeft: '5px' }} onClick={() => [setId(user.id), setShowpopup(true)]}>View</button>
                        <Link to={`/Update/${user.id}`} style={{ marginLeft: '20px' }}>Edit</Link>
                        <button style={{ marginLeft: '20px' }} onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Read;

