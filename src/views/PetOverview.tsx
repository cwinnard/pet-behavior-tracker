import { useParams } from 'react-router';
import { Chip } from '@mui/material';

import '../styles/PetOverview.css';
import dogs from '../data/dogs.json';
import ObservationCard from '../components/ObservationCard';


const PetOverview = () => {
  // TSTODO
  const { id } = useParams() as any;
  const dog = dogs.find(dog => dog.id === id) as any;
  return (
    <div className="profile-container">
      Hello {dog.name} id {id}
      <img className="profile-picture" src={dog.picture} />
      <div className="chip-container">
         <Chip label="Happy" /> 
         <Chip label="Energetic" /> 
         <Chip label="Timid" />
      </div>
      <div className="recent-observations-container">
        {dog.observations.map(observation => {
          return (
            <ObservationCard id={dog.id} picture={dog.picture} name={observation.observation} />
          )
        })}
      </div>
    </div>
  );
}
  
export default PetOverview;