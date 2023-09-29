import { Button, ClickAwayListener, FormControl, InputLabel, Menu, MenuItem, OutlinedInput, Paper, Select } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { logout } from '@/Redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const BlogDropdown = () => {

  const dispatch=useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout=()=>{
     dispatch(logout())
    }
    const titleRemove = () => {
      localStorage.removeItem("title");
    };
  return (
    <>
       <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        style={{marginLeft:"270px" ,color:"Black",marginTop:"-65px",border:"none",color:"#F08000",fontWeight:"bold",textTransform:"none",fontSize:"18px"}}
        endIcon={<ArrowDropDownCircleIcon style={{color:"#F08000",}}/>}
      >
        Blog
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: 200,
          },
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
          
            <Link href="/blog-create" passHref style={{textDecoration:"none",color:"black"}} onClick={titleRemove}>
            <MenuItem sx={{ '&:hover': { backgroundColor: '#F08000' } }}>Blog Create</MenuItem>
            </Link>
            <Link href="/blog-list"  passHref style={{textDecoration:"none",color:"black"}}>
            <MenuItem sx={{ '&:hover': { backgroundColor: '#F08000' } }}>Blog Details</MenuItem>
            </Link>
            <Link href="/login"  passHref style={{textDecoration:"none",color:"black"}} onClick={handleLogout}>
            <MenuItem sx={{ '&:hover': { backgroundColor: '#F08000' } }}>Logout</MenuItem>
            </Link>
          </Paper>
        </ClickAwayListener>
      </Menu>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
    </>
  )
}

export default BlogDropdown