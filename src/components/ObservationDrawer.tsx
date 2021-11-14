import { Drawer, Paper } from '@mui/material';

import '../styles/ObservationDrawer.css';

const ObservationDrawer = ({ open, handleClose }) => {
    return (
        <Drawer
          open={open}
          onClose={handleClose}
          anchor="bottom"
          className="observation-drawer"
        >
            <div className="drawer-top" />
            <Paper className="input-container">
                <p>Hello modal</p>
            </Paper>
        </Drawer>
    );
  }
  
  export default ObservationDrawer;