import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './appbar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchData } from '../feacture/userDetailsSlice'; 

const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('')
  const allUsers = useSelector((state) => state.app.users);

  const navigateCreate = () => {
    navigate('/create');
  };
  const navigateRead = () => {
    navigate('/read'); 
   
  };
   const handleSearchChange = (event) => {
    const value = event.target.value;
    console.log('event================>',event)
    setSearchValue(value);
    dispatch(searchData(value)); 
  };
  return (
    <div className='nav_bar'> 
      <div className='logo'>
        <h2>RTK</h2>
        <p onClick={navigateCreate}>Create Post</p>
        <p onClick={navigateRead}>All Posts ({allUsers.length})</p>
      </div>
      <div className='search_bar'>
        <input
          placeholder='Search....'
          type='search'
          value={searchValue} 
          onChange={handleSearchChange}
        />
        {/* <SearchIcon /> */}
      </div>
    </div>
  );
};
export default AppBar;
