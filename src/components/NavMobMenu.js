import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClickItem} id = {'one'} >Home</MenuItem>
        <MenuItem onClick={handleClickItem} id = {'two'} >About</MenuItem>
        <MenuItem onClick={handleClickItem} id = {'three'} >Projects</MenuItem>
        <MenuItem onClick={handleClickItem} id = {'four'} >Contact</MenuItem>
        <MenuItem onClick={handleClickItem} id = {'five'} >Resume</MenuItem>
      </Menu>
    </div>
  );
}