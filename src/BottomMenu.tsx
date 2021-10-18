import { AppBar, Toolbar } from '@mui/material';

const BottomMenu = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        Hello app bar
      </Toolbar>
    </AppBar>
  );
}

export default BottomMenu;