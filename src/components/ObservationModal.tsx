import { Card, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

const ObservationModal = ({ open, handleClose }) => {
    return (
        <Modal
          open={open}
          onClose={handleClose}
        >
            <p>Hello modal</p>
        </Modal>
    );
  }
  
  export default ObservationModal;