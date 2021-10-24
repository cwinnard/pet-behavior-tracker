import { AppBar, IconButton, Toolbar } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';

import ObservationModal from './components/ObservationModal';

import './styles/BottomMenu.css';

const BottomMenu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <ObservationModal open={modalOpen} handleClose={handleModalClose} />
      <Toolbar>
        <div className="icon-container">
          <IconButton onClick={handleModalOpen}>
            <AddCircleRoundedIcon color="secondary" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default BottomMenu;