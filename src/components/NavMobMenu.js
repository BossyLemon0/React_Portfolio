import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavMobMenu(props) {
  const elScroll = props.props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickItem = (event) => {
    elScroll(event, true)
    handleClose();

  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ backgroundColor: 'transparent', color: 'white' }}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // sx={{ backgroundColor: 'black'}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        slotProps={{
          paper:{
            sx: {
              backgroundColor: 'transparent',
            }
          }

        }}

      >
        <MenuItem onClick={handleClickItem} 
        sx={{ backgroundColor: 'transparent', color: 'white' }}
         id = {'one'} >Home</MenuItem>
                 <MenuItem onClick={handleClickItem} 
        sx={{ backgroundColor: 'transparent', color: 'white' }}
         id = {'two'} >About</MenuItem>
                 <MenuItem onClick={handleClickItem} 
        sx={{ backgroundColor: 'transparent', color: 'white' }}
         id = {'three'} >Projects</MenuItem>
                 <MenuItem onClick={handleClickItem} 
        sx={{ backgroundColor: 'transparent', color: 'white' }}
         id = {'four'} >Contact</MenuItem>
                 <MenuItem onClick={handleClickItem} 
        sx={{ backgroundColor: 'transparent', color: 'white' }}
         id = {'five'} >Resume</MenuItem>
      </Menu>
    </div>
  );
}