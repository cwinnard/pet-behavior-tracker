import { Drawer, Paper } from '@mui/material';
import { useState } from 'react';

import { mutate } from '../api/clients/HasuraClient';
import newObservationMutation from '../api/graphql/newObservationMutation';

import '../styles/ObservationDrawer.css';


const ObservationDrawer = ({ open, handleClose }) => {
    const [dogId, setDogId] = useState(0);
    const [behavior, setBehavior] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        mutate(newObservationMutation, {
            dog_id: dogId,
            behavior,
            category
        }).then((response: any) => {
          console.log('ok')
        });
    }

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
                <button onClick={() => handleSubmit()}>
                    Submit
                </button>
            </Paper>
        </Drawer>
    );
  }
  
  export default ObservationDrawer;