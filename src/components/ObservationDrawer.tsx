import { Drawer, MenuItem, Paper, TextField } from '@mui/material';
import { useState } from 'react';

import { mutate } from '../api/clients/HasuraClient';
import newObservationMutation from '../api/graphql/newObservationMutation';
import categoryOptions from './categoryOptions';
import ObservationOptionCards from './ObservationOptionCards';

import '../styles/ObservationDrawer.css';


const ObservationDrawer = ({ open, handleClose }) => {
    const [dogId, setDogId] = useState('');
    const [category, setCategory] = useState('');
    const [behavior, setBehavior] = useState('');
    const [observationOptions, setObservationOptions] = useState([{
        name: '',
        image: ''
    }]);

    const handleSubmit = () => {
        mutate(newObservationMutation, {
            dog_id: parseInt(dogId),
            behavior,
            category
        }).then((response: any) => {
          console.log('ok')
        });
    }

    const handleCategoryChange = (value) => {
        setCategory(value);
        setObservationOptions(categoryOptions[value]);
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
                <TextField
                  select
                  value={dogId}
                  onChange={event => setDogId(event?.target.value)}
                >
                    <MenuItem value={1}>
                        {1}
                    </MenuItem>
                </TextField>
                <TextField
                  select
                  value={category}
                  onChange={event => handleCategoryChange(event.target.value)}
                >
                    {Object.keys(categoryOptions).map(category => (
                        <MenuItem value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                {category && (
                    <ObservationOptionCards options={observationOptions} />
                )}
                <button onClick={() => handleSubmit()}>
                    Save
                </button>
            </Paper>
        </Drawer>
    );
  }
  
  export default ObservationDrawer;