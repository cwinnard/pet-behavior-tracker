import { Paper, Modal } from '@mui/material';

import '../styles/ObservationModal.css';

const ObservationModal = ({ open, handleClose }) => {
    return (
        <Modal
          open={open}
          onClose={handleClose}
        >
            <Paper className="input-container">
                <p>Hello modal</p>
            </Paper>
        </Modal>
    );
  }
  
  export default ObservationModal;