import { Drawer, MenuItem, Paper, TextField } from '@mui/material';
import { useState } from 'react';

import { mutate } from '../api/clients/HasuraClient';
import newObservationMutation from '../api/graphql/newObservationMutation';

import '../styles/ObservationDrawer.css';

// TODO own file
const categories = {
    'Behavior': ['Happy', 'Spastic'],
    'Appetite': ['Low', 'Healthy', 'Insatiable']
};


const ObservationDrawer = ({ open, handleClose }) => {
    const [dogId, setDogId] = useState(1);
    const [category, setCategory] = useState('');
    const [behavior, setBehavior] = useState('');
    const [observationOptions, setObservationOptions] = useState([]);

    const handleSubmit = () => {
        mutate(newObservationMutation, {
            dog_id: dogId,
            behavior,
            category
        }).then((response: any) => {
          console.log('ok')
        });
    }

    const handleCategoryChange = (value) => {
        setCategory(value);
        setObservationOptions(categories[value])
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
                {/* <TextField onChange={event => setDogId(event?.target.value)}>
                </TextField> */}
                <TextField
                  select
                  value={category}
                  onChange={event => handleCategoryChange(event.target.value)}
                >
                    {Object.keys(categories).map(category => (
                        <MenuItem value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                {category && (
                    <div className="options-container">
                        {observationOptions.map(option => (
                            <div>
                                hello {option}
                            </div>
                        ))}
                    </div>
                )}
                <button onClick={() => handleSubmit()}>
                    Submit
                </button>
            </Paper>
        </Drawer>
    );
  }
  
  export default ObservationDrawer;