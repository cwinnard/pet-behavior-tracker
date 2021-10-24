import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Chip } from '@mui/material';

import { getDogOverview } from '../api/Dog';

import '../styles/PetOverview.css';
import ObservationCards from '../components/ObservationCards';


const PetOverview = () => {
  const [dog, setDog] = useState({
    id:'',
    name: '',
    rescue: '',
    picture: '',
    age: '',
    observations: [{
        timestamp: '',
        category: '',
        observation: ''
    }]
  })
  // TSTODO
  const { id } = useParams() as any;
  useEffect(() => {
    getDogOverview(id).then(dog => { if(dog) setDog(dog) })
  })
  return (
    <div className="profile-container">
      <p>Hello {dog.name}</p>
      <p>{dog.rescue}</p>
      <img className="profile-picture" src={dog.picture} />
      <div className="chip-container">
        <Chip label="Happy" />
        <Chip label="Energetic" />
        <Chip label="Timid" />
      </div>
      <div className="recent-observations-container">
        <div>Recent Observations</div>
        <ObservationCards observations={dog.observations}/>
      </div>
    </div>
  );
}
  
export default PetOverview;