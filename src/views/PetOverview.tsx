import { useParams } from 'react-router';

import dogs from '../data/dogs.json';


const PetOverview = () => {
  // TSTODO
    const { id } = useParams() as any;
    return (
      <div>
        <div>
          Hello {dogs[0].name} id {id}
        </div>
      </div>
    );
  }
  
  export default PetOverview;