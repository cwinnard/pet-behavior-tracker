import { AppBar, IconButton, Toolbar } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

import './styles/BottomMenu.css';

const BottomMenu = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <div className="icon-container">
          <IconButton>
            <AddCircleRoundedIcon color="secondary" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default BottomMenu;