import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  position: 'absolute' as 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SearchButton = styled(IconButton)({

});

export default function CombinedComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     
      <SearchButton onClick={handleOpen} aria-label="search">
        <SearchIcon />
      </SearchButton>
      
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="search-modal-title"
        aria-describedby="search-modal-description"
        className='backdrop-filter backdrop-blur-lg'
      >
        <Box sx={style} className="text-black">
          <Typography id="search-modal-title" variant="h6" component="h2" className='flex items-center justify-center'>
            Pesquisar:
          </Typography>
          <Typography id="search-modal-description" sx={{ mt: 2 }}>
            <input type="text" placeholder="" className='outline-none border-b-2 border-gray-500 w-80' />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
